import { useState } from "react";
import {
  Container,
  Typography,
  CssBaseline,
  Alert,
  Button,
} from "@mui/material";
import SkillSelector from "./SkillSelector";
import RepositoryList from "./RepositoryList";
import axios from "axios";
import "./index.css";
import Navbar from "./Nav";
import Footer from "./Footer"

export default function App() {
  const [repositories, setRepositories] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [needsAuth, setNeedsAuth] = useState(false);

  const handleSearch = async (selectedSkills) => {
    setIsLoading(true);
    setError(null);
    try {
      const query = selectedSkills.map((skill) => `topic:${skill}`).join(" ");
      const response = await axios.get(
        "https://api.github.com/search/repositories",
        {
          params: {
            q: query,
            sort: "stars",
            order: "desc",
            per_page: 10,
          },
        }
      );

    
      if (response.data.items.length === 0) {
        setNeedsAuth(true);
        throw new Error("For more results, please authenticate");
      }

      setRepositories(response.data.items);
    } catch (err) {
      setError(err.message || "Failed to fetch repositories");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <Navbar />
      <CssBaseline />
      <Container maxWidth="md" sx={{ py: 4 }}>
        <Typography
          variant="h3"
          component="h1"
          align="center"
          gutterBottom
          sx={{ fontWeight: "bold", mb: 4 }}
        >
          GitHub Repository Recommender
        </Typography>

        {error && (
          <Alert
            severity={needsAuth ? "warning" : "error"}
            sx={{ mb: 3 }}
            action={
              needsAuth ? (
                <Button
                  color="inherit"
                  size="small"
                  href="https://docs.github.com/en/rest/overview/resources-in-the-rest-api#authentication"
                  target="_blank"
                >
                  Learn Auth
                </Button>
              ) : null
            }
          >
            {error}
          </Alert>
        )}

        <SkillSelector onSearch={handleSearch} isLoading={isLoading} />
        <RepositoryList repositories={repositories} isLoading={isLoading} />
      </Container>
      <Footer />
    </>
  );
}
