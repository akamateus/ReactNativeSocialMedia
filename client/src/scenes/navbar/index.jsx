import { useState } from "react";
import {
  Box,
  IconButton,
  InputBase,
  Typography,
  Select,
  MenuItem,
  FormControl,
  useTheme,
  useMediaQuery,
  Menu,
} from "@mui/material";
import {
  PersonSearchIcon,
  TextsmsIcon,
  EmojiObjectsTwoToneIcon,
  EmojiObjectsRoundedIcon,
  NotificationsIcon,
  InfoIcon,
  WidgetsIcon,
  CloseIcon,
  Brightness4Icon,
  Close,
} from "@mui/icons-material";
import { useDispatch, useSelector } from "react-redux";
import { setMode, setLogout } from "state";
import { useNavigate } from "react-router-dom";
import FlexBoxBetween from "components/FlexBoxBetween";

const Navbar = () => {
  const [isMobileMenuToggled, setIsMobileMenuToggled] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state) => state.user);
  const isNotMobileScreens = useMediaQuery("(min-width:1000px)");

  const theme = useTheme();
  const neutralLight = theme.palette.neutral.light;
  const dark = theme.palette.neutral.dark;
  const background = theme.palette.background.default;
  const primaryLight = theme.palette.primary.light;
  const alt = theme.palette.background.alt;

  //User variable⬇️
  const fullName = `${user.firstName} ${user.lastName}`;

  return (
    <FlexBoxBetween padding="1rem 6%" backgroundColor={alt}>
      <FlexBoxBetween gap="1.75rem">
        <Typography
          fontSize="clamp(1rem,2rem,2.25rem)"
          color="primary"
          onClick={() => navigate("/home")}
          sx={{
            "&:hover": {
              color: primaryLight,
              cursor: "pointer",
            },
          }}
        >
          MyCrew
        </Typography>
        {isNotMobileScreens && (
          <FlexBoxBetween
            backgroundColor={neutralLight}
            borderRadius="9px"
            gap="3rem"
            padding="0.1rem 1.5rem"
          >
            <InputBase placeholder="do u have friends?" />
            <IconButton>
              <PersonSearchIcon />
            </IconButton>
          </FlexBoxBetween>
        )}
      </FlexBoxBetween>

      {/* PC NAV */}

      {isNotMobileScreens ? (
        <FlexBoxBetween gap="3rem">
          <IconButton onClick={() => dispatch(setMode())}>
            {theme.palette.mode === "dark" ? (
              <Brightness4Icon sx={{ fontSize: "25px" }} />
            ) : (
              <Brightness4Icon sx={{ color: dark, fontSize: "25px" }} />
            )}
          </IconButton>
          <TextsmsIcon sx={{ fontSize: "25px" }} />
          <NotificationsIcon sx={{ fontSize: "25px" }} />
          <InfoIcon sx={{ fontSize: "25px" }} />
          {/* dropdown on topright ⬇️*/}
          <FormControl variant="standard" value={fullName}>
            <Select
              value={fullName}
              sx={{
                backgroundColor: neutralLight,
                width: "150px",
                borderRadius: "0.25rem",
                padding: "0.25rem 1rem",
                // targeting the icon class⬇️
                "& .MuiSvgIcon-root": {
                  pr: "0.25rem",
                  width: "3rem",
                },
                "& .MuiSelect-select:focus": {
                  backgroundColor: neutralLight,
                },
              }}
              input={<InputBase />}
            >
              {/* button within dropdown ⬇️*/}
              <MenuItem value={fullName}>
                <Typography>{fullName}</Typography>
              </MenuItem>
              <MenuItem onclick={() => dispatch(setLogout())}>
                Leave 🏃🏽‍♀️💨
              </MenuItem>
            </Select>
          </FormControl>
        </FlexBoxBetween>
      ) : (
        <IconButton
          onclick={() => setIsMobileMenuToggled(!isMobileMenuToggled)}
        >
          <Menu />
        </IconButton>
      )}
      {/* PHONE NAV⬇️ */}
      {!isNotMobileScreens && isMobileMenuToggled && (
        <Box
          position="fixed"
          right="0"
          bottom="0"
          height="100%"
          zIndex="10"
          maxWidth="500px"
          minWidth="300px"
          background={background}
        >
          {/* Close icon⬇️ */}
          <Box display="flex" justifyContent="flex-end" p="1rem">
            <IconButton
              onclick={() => setIsMobileMenuToggled(!isMobileMenuToggled)}
            >
              <CloseIcon />
            </IconButton>
          </Box>
          {/* Menu items -copied logic from pc nav, changed some properties in the first FlexBoxBetween ⬇️*/}

          <FlexBoxBetween
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            gap="3rem"
          >
            <IconButton
              onClick={() => dispatch(setMode())}
              sx={{ fontSize: "25px" }}
            >
              {theme.palette.mode === "dark" ? (
                <Brightness4Icon sx={{ fontSize: "25px" }} />
              ) : (
                <Brightness4Icon sx={{ color: dark, fontSize: "25px" }} />
              )}
            </IconButton>
            <TextsmsIcon sx={{ fontSize: "25px" }} />
            <NotificationsIcon sx={{ fontSize: "25px" }} />
            <InfoIcon sx={{ fontSize: "25px" }} />
            {/* dropdown on topright ⬇️*/}
            <FormControl variant="standard" value={fullName}>
              <Select
                value={fullName}
                sx={{
                  backgroundColor: neutralLight,
                  width: "150px",
                  borderRadius: "0.25rem",
                  padding: "0.25rem 1rem",
                  // targeting the icon class⬇️
                  "& .MuiSvgIcon-root": {
                    pr: "0.25rem",
                    width: "3rem",
                  },
                  "& .MuiSelect-select:focus": {
                    backgroundColor: neutralLight,
                  },
                }}
                input={<InputBase />}
              >
                {/* button within dropdown ⬇️*/}
                <MenuItem value={fullName}>
                  <Typography>{fullName}</Typography>
                </MenuItem>
                <MenuItem onclick={() => dispatch(setLogout())}>
                  Leave 🏃🏽‍♀️💨
                </MenuItem>
              </Select>
            </FormControl>
          </FlexBoxBetween>
        </Box>
      )}
    </FlexBoxBetween>
  );
};

export default Navbar;
