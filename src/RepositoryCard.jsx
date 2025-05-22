import { Card, CardContent, Typography, Chip, Stack, Link } from '@mui/material';
import { Star, ForkRight, Code } from '@mui/icons-material';

export default function RepositoryCard({ repo }) {
  return (
    <Card sx={{ mb: 3, transition: 'all 0.3s ease', '&:hover': { transform: 'translateY(-3px)', boxShadow: 3 }}}>
      <CardContent>
        <Typography variant="h6" gutterBottom>
          <Link href={repo.html_url} target="_blank" underline="none" color="inherit">
            {repo.full_name}
          </Link>
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
          {repo.description || 'No description available'}
        </Typography>
        <Stack direction="row" spacing={1} sx={{ mb: 2 }}>
          {repo.language && (
            <Chip icon={<Code />} label={repo.language} size="small" />
          )}
          <Chip icon={<Star />} label={repo.stargazers_count.toLocaleString()} size="small" />
          <Chip icon={<ForkRight />} label={repo.forks_count.toLocaleString()} size="small" />
        </Stack>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
          {repo.topics?.slice(0, 5).map(topic => (
            <Chip key={topic} label={topic} size="small" variant="outlined" />
          ))}
        </div>
      </CardContent>
    </Card>
  );
}