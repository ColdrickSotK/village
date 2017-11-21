var svg = d3.select('#population'),
    margin = {top: 10, right: 20, bottom: 40, left: 40},
    width = +svg.attr('width') - margin.left - margin.right,
    height = +svg.attr('height') - margin.top - margin.bottom,
    g = svg.append('g')
          .attr('transform', `translate(${margin.left}, ${margin.top})`)


var x = d3.scaleLinear().rangeRound([0, width]),
    y = d3.scaleLinear().rangeRound([height, 0]);

var line = d3.line()
  .x((d) => { return x(d.day) })
  .y((d) => { return y(d.population) })
  .curve(d3.curveCatmullRom);

var data = [
  {day: 0, population: 20},
  {day: 100, population: 24},
  {day: 200, population: 36},
  {day: 300, population: 50},
  {day: 400, population: 67},
  {day: 500, population: 78},
  {day: 600, population: 100}
]

x.domain(d3.extent(data, d => d.day));
y.domain(d3.extent(data, d => d.population));

g.append('g')
  .attr('transform', `translate(0, ${height})`)
  .call(d3.axisBottom(x))
  .append('text')
    .attr('fill', '#333')
    .attr('x', 320)
    .attr('y', -6)
    .attr("text-anchor", "end")
    .text("Days");

g.append('g')
  .call(d3.axisLeft(y))
  .append('text')
    .attr('fill', '#333')
    .attr('transform', 'rotate(-90)')
    .attr('y', 6)
    .attr('dy', '10px')
    .attr("text-anchor", "end")
    .text("Population");

g.append('path')
  .datum(data)
  .attr('fill', 'none')
  .attr('stroke', '#933')
  .attr("stroke-linejoin", "round")
  .attr("stroke-linecap", "round")
  .attr("stroke-width", 1.5)
  .attr("d", line);
