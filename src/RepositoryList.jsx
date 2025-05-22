import { Box, CircularProgress, Typography } from '@mui/material';
import RepositoryCard from './RepositoryCard';

export default function RepositoryList({ repositories, isLoading }) {
  if (isLoading) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', my: 4 }}>
        <CircularProgress size={60} />
      </Box>
    );
  }

  if (!repositories?.length) {
    return (
      <Typography variant="h6" align="center" sx={{ my: 4, color: 'text.secondary' }}>
        No repositories found. Try selecting different skills.
      </Typography>
    );
  }

  return (
    <Box sx={{ mt: 4 }}>
      {repositories.map(repo => (
        <RepositoryCard key={repo.id} repo={repo} />
      ))}
    </Box>
  );
}