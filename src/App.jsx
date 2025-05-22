import { useState } from 'react';
import { Container, Typography, CssBaseline, Alert } from '@mui/material';
import SkillSelector from './SkillSelector';
import RepositoryList from './RepositoryList';
import axios from 'axios';
import './index.css';

export default function App() {
  const [repositories, setRepositories] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSearch = async (selectedSkills) => {
    setIsLoading(true);
    setError(null);
     try {
      const query = selectedSkills.map(skill => `topic:${skill}`).join(' ');
      const response = await axios.get('https://api.github.com/search/repositories', {
        params: {
          q: query,
          sort: 'stars',
          order: 'desc',
          per_page: 10
        },
        headers: {
          Authorization: import.meta.env.VITE_GITHUB_TOKEN 
            ? `Bearer ${import.meta.env.VITE_GITHUB_TOKEN}`
            : undefined,
          Accept: 'application/vnd.github.v3+json'
        }
   
      });
      setRepositories(response.data.items);
    } catch (err) {
      setError(err.response?.data?.message || 'Failed to fetch repositories');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <CssBaseline />
      <Container maxWidth="md" sx={{ py: 4 }}>
        <Typography variant="h3" component="h1" align="center" gutterBottom sx={{ fontWeight: 'bold', mb: 4 }}>
          GitHub Repository Recommender
        </Typography>
        {error && <Alert severity="error" sx={{ mb: 3 }}>{error}</Alert>}
        <SkillSelector onSearch={handleSearch} isLoading={isLoading} />
        <RepositoryList repositories={repositories} isLoading={isLoading} />
      </Container>
    </>
  );
}
