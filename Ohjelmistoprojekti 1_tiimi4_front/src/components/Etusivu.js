import { Box, Typography } from "@mui/material";
import { Link } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
function Etusivu() {
  return (
    <Box
      sx={{
        bgcolor: "background.paper",
        pt: 8,
        pb: 6,
        m: 5,
      }}
    >
      <Typography component="h1" variant="h2" align="left" gutterBottom>
        Kysely 1
      </Typography>
      <Link component={RouterLink} to="/kysely1">
        <Typography variant="h6" gutterBottom>
          Linkki ensimmäiseen kyselyyn
        </Typography>
      </Link>
      <Typography component="h1" variant="h2" align="left" gutterBottom>
        Kysely 2
      </Typography>
      <Link component={RouterLink} to="/kysely2">
        <Typography variant="h6" gutterBottom>
          Linkki toiseen kyselyyn
        </Typography>
      </Link>
      <Typography component="h1" variant="h2" align="left" gutterBottom>
        Kysely 1 tulokset
      </Typography>
      <Link component={RouterLink} to="/tulokset">
        <Typography variant="h6" gutterBottom>
          Linkki ensimmäisen kyselyn tuloksiin
        </Typography>
      </Link>
      <Typography component="h1" variant="h2" align="left" gutterBottom>
        Kysely 2 tulokset
      </Typography>
      <Link component={RouterLink} to="/tulokset2">
        <Typography variant="h6" gutterBottom>
          Linkki toisen kyselyn tuloksiin
        </Typography>
      </Link>
    </Box>
  );
}

export default Etusivu;
