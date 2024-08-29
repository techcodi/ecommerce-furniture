import StarOutlinedIcon from "@mui/icons-material/StarOutlined";

function Stars({ maxRating }) {
  return (
    <div>
      {Array.from({ length: maxRating }, (_, i) => (
        <Star />
      ))}
    </div>
  );
}

export default Stars;

function Star() {
  return (
    <di>
      <StarOutlinedIcon style={{ color: "gold" }} />
    </di>
  );
}
