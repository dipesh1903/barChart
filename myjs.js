function max_axis(a) {
    console.log(a)
    let nn = a,f=0,c=0,yy;
    while(parseInt(nn/10) != 0) {
        yy = nn%10;
        if(yy!=0 && !f)
        {
            f=1;
        }
        c++;
        nn = parseInt(nn/10);
        console.log(nn)
    }
    if(!f) {
        return a;
    } else {
        return (nn+1)*(Math.pow(10,c));
    }
}

console.log(document.querySelector(".container").clientWidth)

var datast = [200,150,100,50,0];
var naya_data = [{d:10,h:0,y:477},{d:600,h:0,y:477},{d:80,h:0,y:477},{d:870,h:0,y:477},{d:10,h:0,y:477}];

var datas = [10,600,80,870,10];
var bottom = [1,2,3,4,5]
let barWidth = 70;
var svgWidth = document.querySelector(".container").clientWidth;
function getWidth() {
    console.log(document.querySelector(".container").clientWidth)
    svgWidth = document.querySelector(".container").clientWidth;
    barWidth = svgWidth/datas.length - 60;
    if(barWidth<35)
    {
        barWidth = 35;
    }
    updateShowGraph()

}

var circlePos = [];
var pointsPos = [];
var textPos = [];
var Ypoints = []
var Xpoints = []
var points = []
svgHeight = 500, barPadding = 5;
console.log(svgWidth)
for(let i=0;i<5;i++) {
circlePos[i] = {y:svgHeight-23}
textPos[i] = {y:svgHeight-26}
pointsPos[i] = {y:svgHeight - 23}
Ypoints[i] = 0;
Xpoints[i] = 0;
}


/*
let outerPad = 0.2;
let innerPad = 0.1;

let x = d3.scaleOrdinal()
        .domain(dataset)
        .rangeBands([0,svgWidth],innerPad,outerPad);

let svg = d3.select('svg')
    .attr("width", svgWidth)
    .attr("height", svgHeight);

let text = svg.selectAll("text")
              .data(dataset)
              .enter()
              .append("text")
              .text(function(i){
                  return i
              })
              .attr("y" , 20)
              .attr("x" , (i) => x(i));

let xScale = d3.scaleLinear()
               .domain([0,9])
               .range([0,svgWidth])

let yScale = d3.scaleLinear()
               .domain([d3.min(dataset),d3.max(dataset)])
               .range([0,svgHeight])

let y_axis = d3.axisBottom()
               .scale(xScale)

*/

/*----------------------------------------------------------------- ye kaam krta hai -------------------------------
var svg = d3.select('svg')
    .attr("width", svgWidth)
    .attr("height", svgHeight);

var xScale = d3.scaleLinear()
    .domain([0, d3.max(dataset)])
    .range([0, svgWidth]);

var yScale = d3.scaleLinear()
    .domain([0, d3.max(dataset)])
    .range([svgHeight, 0]);

    var x_axis = d3.axisBottom().scale(xScale);
    var y_axis = d3.axisLeft().scale(yScale);

    svg.append("g")
    .attr("transform", "translate(30, 10)")
    .call(y_axis);
var xAxisTranslate = svgHeight - 20;
svg.append("g")
    .attr("transform", "translate(30, " + xAxisTranslate  +")")
    .call(x_axis);
    textScale = d3.scalePoint()
              .domain([0,1,2,3,4,5,6,7,8,9])
              .range([0,svgWidth])
textScale.padding(0.2)

var barChart = svg.selectAll("rect")
    .data(dataset)
    .enter()
    .append("rect")
    .attr("y", svgHeight-30
    )
    .attr("width", barWidth - barPadding)
    .attr("x", function(d,i){
        return textScale(i)+30
    })
    .attr("height",0)
    .transition()
            .duration(2000)
            .attr("y" ,(i) => svgHeight - i-30)
            .attr("height", (i) => i)
        var text = svg.append("g")
                .selectAll("text")
              .data(dataset)
              .enter()
              .append("text")
              .attr("text-anchor", "center")
              .attr("y", (d,i) => svgHeight- d- 3)
              .attr("x" , (d,i) => textScale(i)+barWidth/2 )
              .text((d) => d)
              .attr("fill" , "green")
              .attr("text-anchor" , "middle")


 let circle =svg.selectAll("circle")
                .data(dataset)
                .enter()
                .append("circle")
                .attr("cx" , (d,i) => textScale(i) + barWidth/2 +30 )
                .attr("cy" , svgHeight-30)
                .attr("r" , "5")
                .attr("fill" , "yellow")
                .attr("text-anchor", "middle")
                .transition()
                .duration(2000)
                .attr("cy" , (d,i) => svgHeight - d/2 -30);
*/
/*----------------------------------------------------yaha tak -----------------------------------------*/
function showGraph(){
    let max_val = Math.max(...datas);
    console.log(max_val)
    let max_axis_value = max_axis(max_val);
    console.log(max_axis_value)
    let diff = max_axis_value/datas.length;
    let dataset = [];
    let dts = []
    for(let i=0 ;i<=datas.length; i++) {
        dataset.unshift(i*diff)
        dts.push(i);
    }
    dts.push(datas.length+1)

var change;
let marginLeft = 40;
let marginTop = 30;
let marginBottom = 30;

let y_axis_point = d3.scalePoint()
                     .domain(dts)
                     .range([40,svgHeight])

let band = d3.scaleBand()
             .domain([0,1,2,3,4,5])
             .range([40,svgWidth])
             .paddingInner(0.3)
             .paddingOuter(0.6)

console.log(y_axis_point(0))
let kx = y_axis_point(0)

/*
let chart_scale = d3.scaleLinear()
                   .domain([0,d3.max(datas)])
                   .range([0,svgHeight-67])

                   */
let dif = max_axis_value - max_val;

let chart_scale = d3.scaleLinear()
                .domain([0,max_axis_value])
                .range([0,svgHeight-68])

let svg = d3.select("svg")
            .attr("width", svgWidth)
            .attr("height", svgHeight)




y_axis = svg.append("g")
.classed("axes", true)
.selectAll("g")
.data(dataset)
.enter()
.append("g")
.attr("transform" , (d,i) => {
            return `translate(30,${y_axis_point(i)})`
})

y_axis.append("text")
      .text((i) => i)
      .attr("y",(d,i) => (i+1)*10)
      .attr("x", 10)
      .attr("text-anchor","end")

y_axis.append("line")
      .attr("x1", 10)
      .attr("x2", svgWidth)
      .attr("y1",(d,i) => (i+1)*10 -5)
      .attr("y2",(d,i) => (i+1)*10 -5)
      .attr("stroke","black")
      .attr("stroke-width",0.09)


let bars = svg.append("g")
              .classed("x-axis", true)
              .selectAll("g")
              .data(bottom)
              .enter()
              .append("g")
              .attr("transform", (d,i) => {
                  return `translate(${band(i)+barWidth/2},0)`
              })

bars.append("text")
    .text((i) => i)
    .attr("text-anchor", "middle")
    .attr("y",  svgHeight) // change

let bar_chart = svg.append("g")
                    .classed("bars",true)
                    .selectAll("g")
                    .data(naya_data)
                    .enter()
                    .append("g")
                    .attr("transform", (d,i) => {
                        Xpoints[i] = (band(i)+barWidth/2)
                        return `translate(${band(i)},0)`
                    })


bar_chart.append("rect")
         .attr("width",barWidth)
         .attr("text-anchor", "middle")
         .attr("height" , (d) => d.h)
         .attr("y", (d) => d.y) // change
         .transition()
        .duration(2000)
        .attr("y", (d,i) =>
        {
        naya_data[i] = {...naya_data[i],y:svgHeight-chart_scale(d.d)-23};
        console.log(d.y)
        return svgHeight-chart_scale(d.d)-23}) //change
        .attr("height",(d,i) => {
            naya_data[i] = {...naya_data[i],h:chart_scale(d.d)}
            return chart_scale(d.d)

        })

bar_chart.append("circle")
         .attr("r" ,5)
         .attr("fill","yellow")
         .attr("cx", barWidth/2)
         .attr("cy",(d,i) => circlePos[i].y)
         .transition()
         .duration(2000)
         .attr("cy" , (d,i) => {
             Ypoints[i] = (svgHeight-23- chart_scale(d.d)/2);
             circlePos[i] = {...circlePos[i],y:svgHeight-23- chart_scale(d.d)/2}
             return svgHeight-23- chart_scale(d.d)/2})

         bar_chart.append("text")
         .text((d,i) => d.d)
         .attr("text-anchor", "middle")
         .attr("x", barWidth/2)
         .attr("y", (d,i) => textPos[i].y)
         .transition()
         .duration(2000)
         .attr("y" , (d,i) => {
            let kbc =  textPos[i].y- chart_scale(d.d)
            textPos[i] = {...textPos[i],y:kbc}
            return kbc;
        });
Xpoints.forEach((item,index) => {
    points[index] = {x:item,y:Ypoints[index]}
})
console.log(points)
svg.append("path")
.classed("paths", true)
.datum(points)
.attr("fill", "none")
      .attr("stroke", "steelblue")
      .style("stroke-dasharray", ("10, 10"))
      .attr("stroke-width", 1.5)
      .attr("d" , d3.line()
      .x((d,i) => band(i)+barWidth/2)
      .y((d,i) => pointsPos[i].y)
      )
      .transition()
      .duration(2000)
      .attr("d", d3.line()
        .x(function(d) { return d.x })
        .y(function(d,i) { 
            pointsPos[i] = {...pointsPos[i], y:d.y}
            return d.y })
        )


        console.log(naya_data,circlePos,textPos)
}

function updateShowGraph() {
    let max_val = Math.max(...datas);
    console.log(max_val)
    let max_axis_value = max_axis(max_val);
    console.log(max_axis_value)
    let diff = max_axis_value/datas.length;
    let dataset = [];
    let dts = []
    for(let i=0 ;i<=datas.length; i++) {
        dataset.unshift(i*diff)
        dts.push(i);
    }
    dts.push(datas.length+1)

var change;
let marginLeft = 40;
let marginTop = 30;
let marginBottom = 30;

let y_axis_point = d3.scalePoint()
                     .domain(dts)
                     .range([40,svgHeight])

let band = d3.scaleBand()
             .domain([0,1,2,3,4,5])
             .range([40,svgWidth])
             .paddingInner(0.3)
             .paddingOuter(0.6)

console.log(y_axis_point(0))
let kx = y_axis_point(0)

/*
let chart_scale = d3.scaleLinear()
                   .domain([0,d3.max(datas)])
                   .range([0,svgHeight-67])

                   */
let dif = max_axis_value - max_val;

let chart_scale = d3.scaleLinear()
                .domain([0,max_axis_value])
                .range([0,svgHeight-68])

                /*
let svg = d3.select("svg")
            .attr("width", svgWidth)
            .attr("height", svgHeight)
*/

let svg = d3.select("svg")

let y_axis = svg.selectAll(".axes")
.selectAll("g")
.remove()
.exit()
.data(dataset)
.enter()
.append("g")
.attr("transform" , (d,i) => {
            return `translate(30,${y_axis_point(i)})`
})


y_axis.append("text")
      .text((i) => i)
      .attr("y",(d,i) => (i+1)*10)
      .attr("x", 10)
      .attr("text-anchor","end")

y_axis.append("line")
      .attr("x1", 10)
      .attr("x2", svgWidth)
      .attr("y1",(d,i) => (i+1)*10 -5)
      .attr("y2",(d,i) => (i+1)*10 -5)
      .attr("stroke","black")
      .attr("stroke-width",0.09)


let bars = svg
              .selectAll(".x-axis")
              .selectAll("text")
              .remove()
              .exit()
              .data(bottom)
              .enter()
              .append("g")
              .attr("transform", (d,i) => {
                  return `translate(${band(i)+barWidth/2},0)`
              })

bars.append("text")
    .text((i) => i)
    .attr("text-anchor", "middle")
    .attr("y",  svgHeight) // change

let bar_chart = svg
                    .selectAll(".bars")
                    .selectAll("g")
                    .remove()
                    .exit()
                    .data(naya_data)
                    .enter()
                    .append("g")
                    .attr("transform", (d,i) => {
                        Xpoints[i] = (band(i)+barWidth/2)
                        return `translate(${band(i)},0)`
                    })


bar_chart.append("rect")
         .attr("width",barWidth)
         .attr("text-anchor", "middle")
         .attr("height" , (d) => d.h)
         .attr("y", (d) => d.y) // change
         .transition()
        .duration(2000)
        .attr("y", (d,i) =>
        {
        naya_data[i] = {...naya_data[i],y:svgHeight-chart_scale(d.d)-23};
        console.log(d.y)
        return svgHeight-chart_scale(d.d)-23}) //change
        .attr("height",(d,i) => {
            naya_data[i] = {...naya_data[i],h:chart_scale(d.d)}
            return chart_scale(d.d)

        })

bar_chart.append("circle")
         .attr("r" ,5)
         .attr("fill","yellow")
         .attr("cx", barWidth/2)
         .attr("cy",(d,i) => circlePos[i].y)
         .transition()
         .duration(2000)
         .attr("cy" , (d,i) => {
             Ypoints[i] = (svgHeight-23- chart_scale(d.d)/2);
             circlePos[i] = {...circlePos[i],y:svgHeight-23- chart_scale(d.d)/2}
             return svgHeight-23- chart_scale(d.d)/2})

         bar_chart.append("text")
         .text((d,i) => d.d)
         .attr("text-anchor", "middle")
         .attr("x", barWidth/2)
         .attr("y", (d,i) => textPos[i].y)
         .transition()
         .duration(2000)
         .attr("y" , (d,i) => {
            let kbc =  svgHeight-26- chart_scale(d.d)
            textPos[i] = {...textPos[i],y:kbc}
            return kbc;
        });
Xpoints.forEach((item,index) => {
    points[index] = {x:item,y:Ypoints[index]}
})
console.log(points)

svg
.selectAll("path")
.remove()
.exit()

svg.append("path")
.datum(points)
.attr("fill", "none")
      .attr("stroke", "steelblue")
      .style("stroke-dasharray", ("10, 10"))
      .attr("stroke-width", 1.5)
      .attr("d" , d3.line()
      .x((d,i) => band(i)+barWidth/2)
      .y((d,i) => pointsPos[i].y)
      )
      .transition()
      .duration(2000)
      .attr("d", d3.line()
        .x(function(d) { return d.x })
        .y(function(d,i) {
            pointsPos[i] = {...pointsPos[i], y:d.y}
            return d.y })
        )


        console.log(naya_data,circlePos,textPos)
}
showGraph()

        function generateRandom() {

            let randData = [];
            for(let i=0; i<5;i++){
                let k = Math.floor((Math.random()*1000)+1)
                randData.push(k);
            }
            datas.forEach((item,index) => {
                datas[index] = randData[index];
                naya_data[index] = {...naya_data[index],d:randData[index]}
            })

            updateShowGraph();
        }
