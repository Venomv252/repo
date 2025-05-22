import { useState } from 'react';
import { 
  Box, 
  Button, 
  Chip, 
  Divider, 
  FormControl, 
  InputLabel, 
  MenuItem, 
  OutlinedInput, 
  Select, 
  Typography,
  CircularProgress
} from '@mui/material';
import { Cancel } from '@mui/icons-material';

const skillCategories = [
  {
    name: "Frontend",
    skills: ["HTML", "CSS", "JavaScript", "TypeScript", "React", "Vue", "Angular", "Svelte"]
  },
  {
    name: "Backend",
    skills: ["Node.js", "Python", "Java", "C#", "Ruby", "PHP", "Go", "Rust"]
  },
  {
    name: "Mobile",
    skills: ["React Native", "Flutter", "Swift", "Kotlin"]
  },
  {
    name: "DevOps",
    skills: ["Docker", "Kubernetes", "AWS", "Azure", "GitHub Actions"]
  },
  {
    name: "Data",
    skills: ["SQL", "MongoDB", "PostgreSQL", "Firebase", "GraphQL"]
  }
];

export default function SkillSelector({ onSearch, isLoading }) {
  const [selectedSkills, setSelectedSkills] = useState([]);
  const [apiError, setApiError] = useState(null);

  const handleSkillChange = (event) => {
    setSelectedSkills(event.target.value);
    setApiError(null); // Clear error when skills change
  };

  const removeSkill = (skillToRemove) => {
    setSelectedSkills(selectedSkills.filter(skill => skill !== skillToRemove));
    setApiError(null); // Clear error when skills change
  };

  const handleSubmit = async () => {
    if (selectedSkills.length === 0) return;
    
    try {
      setApiError(null);
      await onSearch(selectedSkills);
    } catch (error) {
      setApiError(error.message || "Failed to fetch repositories");
    }
  };

  return (
    <Box sx={{ 
      p: 3, 
      border: '1px solid #e0e0e0', 
      borderRadius: 2,
      backgroundColor: 'background.paper',
      boxShadow: 1
    }}>
      <Typography variant="h5" component="h2" gutterBottom sx={{ fontWeight: 'medium' }}>
        Select Your Development Skills
      </Typography>
      
      <FormControl fullWidth sx={{ mt: 2, mb: 3 }}>
        <InputLabel id="skills-label">Skills</InputLabel>
        <Select
          labelId="skills-label"
          multiple
          value={selectedSkills}
          onChange={handleSkillChange}
          input={<OutlinedInput label="Skills" />}
          renderValue={(selected) => (
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
              {selected.map((value) => (
                <Chip 
                  key={value} 
                  label={value}
                  onDelete={() => removeSkill(value)}
                  deleteIcon={<Cancel />}
                  sx={{ backgroundColor: 'primary.light', color: 'white' }}
                />
              ))}
            </Box>
          )}
          MenuProps={{
            PaperProps: {
              style: {
                maxHeight: 300,
              },
            },
          }}
        >
          {skillCategories.map((category) => [
            <MenuItem disabled key={category.name}>
              <Typography sx={{ fontWeight: 'bold', color: 'text.primary' }}>
                {category.name}
              </Typography>
            </MenuItem>,
            ...category.skills.map((skill) => (
              <MenuItem 
                key={skill} 
                value={skill}
                sx={{
                  '&.Mui-selected': { backgroundColor: 'primary.light' },
                  '&.Mui-selected:hover': { backgroundColor: 'primary.main' }
                }}
              >
                {skill}
              </MenuItem>
            )),
            <Divider key={`divider-${category.name}`} sx={{ my: 0.5 }} />
          ])}
        </Select>
      </FormControl>

      {apiError && (
        <Typography color="error" sx={{ mb: 2 }}>
          ⚠️ {apiError}
        </Typography>
      )}

      <Button
        variant="contained"
        onClick={handleSubmit}
        disabled={selectedSkills.length === 0 || isLoading}
        fullWidth
        size="large"
        sx={{ 
          py: 1.5,
          fontWeight: 'bold',
          '&:disabled': { backgroundColor: 'action.disabled' }
        }}
      >
        {isLoading ? (
          <CircularProgress size={24} sx={{ color: 'white' }} />
        ) : (
          'Find Recommended Repositories'
        )}
      </Button>

      <Typography variant="caption" display="block" sx={{ mt: 2, color: 'text.secondary' }}>
        Tip: Select 2-5 skills for best results
      </Typography>
    </Box>
  );
}