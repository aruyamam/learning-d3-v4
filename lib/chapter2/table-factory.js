import * as d3 from 'd3';

export default function tableFactory(_rows) {
  const rows = Array.from(_rows); // Remove the first row for the header
  const header = rows.shift(); // Everything else is a normal data row

  const table = d3.select('body')
    .append('table')
    .attr('class', 'table');

  table.append('thead')
    .append('tr')
    .selectAll('td')
    .data(header)
    .enter()
      .append('th')
      .text(d => d);

  table.append('tbody')
    .selectAll('tr')
    .data(rows)
    .enter()
      .append('tr')
      .selectAll('td')
      .data(d => d)
      .enter()
        .append('td')
        .text(d => d);

    return {
      table,
      header,
      rows
    };
}