function Education() {
  return (
    <section className="card">
      <h2>Education</h2>

      <table border="1" style={{ borderCollapse: "collapse" }}>
        <thead>
          <tr>
            <th>Program</th>
            <th>Institution</th>
            <th>Year Graduated</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Bachelor of Science in Information Management</td>
            <td>USTP – CDO Campus</td>
            <td>2024-2028</td>
          </tr>
          <tr>
            <td>Science Technology Engneering Mathematics </td>
            <td>Liceo de Cagayan University</td>
            <td>2022-2024</td>
          </tr>
          <tr>
            <td>Junior High School</td>
            <td>Misamis Oriental GCHS</td>
            <td>2018-2020</td>
          </tr>
          <tr>
            <td>Elementary School</td>
            <td>Macabalan Elementary School</td>
            <td>2012-2018</td>
          </tr>
          <tr>
            <td>Kindergarten</td>
            <td>Macabalan Elementary School</td>
            <td>2010-2012</td>
          </tr>
        </tbody>
      </table>
    </section>
  );
}

export default Education;