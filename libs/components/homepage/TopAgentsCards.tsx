import { Box, Divider, Stack, Typography } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import FavoriteIcon from "@mui/icons-material/Favorite";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";

const TopAgentsCard = () => {
  return (
    <Stack className="top-card-box">
      <Box className={"card-img"}>
        <img className={"card-img-agent"} src="/img/profile/girl.svg" alt="" />
      </Box>
      <Box className={"info"}>
        <strong className="title">Martin</strong>
        <p className="desc">Agent</p>
      </Box>
    </Stack>
  );
};

export default TopAgentsCard;