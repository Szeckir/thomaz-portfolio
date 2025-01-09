import { Slide } from "react-awesome-reveal";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import TimelineDot from "@mui/lab/TimelineDot";
import Typography from "@mui/material/Typography";

function experienceItem({ professionalExperience }) {
  return (
    <TimelineItem className="hover:cursor-pointer">
      <TimelineOppositeContent
        className="text-gray-400 font-bold"
        sx={{ m: "auto 0" }}
        align="right"
        variant="body2"
      >
        {professionalExperience.position}
      </TimelineOppositeContent>

      <TimelineSeparator>
        <TimelineConnector />
        <TimelineDot>{professionalExperience.icon}</TimelineDot>
        <TimelineConnector />
      </TimelineSeparator>

      <TimelineContent sx={{ py: "12px", px: 2 }}>
        <Typography
          variant="h6"
          component="span"
          className="text-white"
          fontWeight={600}
        >
          {professionalExperience.position}
        </Typography>
        <Typography className="text-gray-300">
          {professionalExperience.description}
        </Typography>
      </TimelineContent>
    </TimelineItem>
  );
}

export default experienceItem;
