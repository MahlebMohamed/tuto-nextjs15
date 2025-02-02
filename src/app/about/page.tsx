export const metadata = {
  title: "About",
  description: "About page",
};

export default async function About() {
  // await new Promise((resolve) => {
  //   setTimeout(() => {
  //     resolve("ok");
  //   }, 2000);
  // });

  return (
    <div>
      <h1>Welcome to the About Page</h1>
      <p>
        This page provides information about our company, mission, and values.
      </p>
      <hr />
      <p>
        Our company was founded in 2020 with the goal of making a positive
        impact in the world.
      </p>
      <p>
        Our mission is to empower individuals and businesses through innovative
        solutions.
      </p>
      <p>Our values include integrity, creativity, and collaboration.</p>
    </div>
  );
}
