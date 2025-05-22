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