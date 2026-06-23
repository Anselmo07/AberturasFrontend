import { FaArrowLeft } from "react-icons/fa";

type ProjectModalProps = {
  project: any;
  onClose: () => void;
};

export const ProjectModal = ({
  project,
  onClose,
}: ProjectModalProps) => {
  if (!project) return null;

  return (
    <div
      onClick={onClose}
      style={{
        position: "fixed",
        inset: 0,
        background: "rgba(0,0,0,.75)",
        zIndex: 9999,

        display: "flex",
        justifyContent: "center",
        alignItems: "center",

        padding: "20px",
      }}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="project-modal"
        style={{
          background: "#fff",
          width: "100%",
          maxWidth: "1000px",
          borderRadius: "24px",
          overflow: "hidden",

          maxHeight: "90vh",
          overflowY: "auto",
        }}
      >
        {/* Header Mobile */}

        <button
          onClick={onClose}
          style={{
            display: "flex",
            alignItems: "center",
            gap: "10px",

            border: "none",
            background: "transparent",

            padding: "20px",
            cursor: "pointer",

            fontWeight: 600,
          }}
        >
          <FaArrowLeft />
          Volver
        </button>

        <img
          src={project.image}
          alt={project.title}
          style={{
            width: "100%",
            maxHeight: "550px",

            objectFit: "contain",
            background: "#f5f5f5",
          }}
        />

        <div
          style={{
            padding: "30px",
          }}
        >
          <span
            style={{
              color: "#C9A14A",
              fontWeight: 600,
              textTransform: "uppercase",
            }}
          >
            {project.category}
          </span>

          <h2
            style={{
              marginTop: "12px",
              fontSize: "36px",
              color: "#111827",
            }}
          >
            {project.title}
          </h2>

          <p
            style={{
              marginTop: "20px",
              color: "#6B7280",
              lineHeight: "1.8",
            }}
          >
            {project.description}
          </p>
        </div>
      </div>
    </div>
  );
};