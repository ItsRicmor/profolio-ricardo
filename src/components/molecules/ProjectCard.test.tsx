import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { ProjectCard } from "./ProjectCard";
import type { Project } from "@/types";

describe("ProjectCard", () => {
  const mockProject: Project = {
    id: "1",
    title: "Test Project",
    description: "This is a test project description",
    tags: ["React", "TypeScript", "Vite"],
    demoUrl: "https://example.com",
    image: "/test-image.png",
  };

  it("should render project title", () => {
    render(<ProjectCard project={mockProject} />);
    expect(screen.getByText("Test Project")).toBeInTheDocument();
  });

  it("should render project description", () => {
    render(<ProjectCard project={mockProject} />);
    expect(screen.getByText("This is a test project description")).toBeInTheDocument();
  });

  it("should render all tags", () => {
    render(<ProjectCard project={mockProject} />);
    expect(screen.getByText("React")).toBeInTheDocument();
    expect(screen.getByText("TypeScript")).toBeInTheDocument();
    expect(screen.getByText("Vite")).toBeInTheDocument();
  });

  it("should render demo link when demoUrl is provided", () => {
    render(<ProjectCard project={mockProject} />);
    const link = screen.getByRole("link", { name: /landing_page/i });
    expect(link).toHaveAttribute("href", "https://example.com");
    expect(link).toHaveAttribute("target", "_blank");
  });

  it("should render image when provided", () => {
    render(<ProjectCard project={mockProject} />);
    const image = screen.getByAltText("Test Project");
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute("src", "/test-image.png");
  });

  it("should not render image when not provided", () => {
    const projectWithoutImage = { ...mockProject, image: undefined };
    render(<ProjectCard project={projectWithoutImage} />);
    expect(screen.queryByAltText("Test Project")).not.toBeInTheDocument();
  });
});
