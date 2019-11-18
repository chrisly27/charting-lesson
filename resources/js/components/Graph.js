import Chart from 'chart.js';


export default {
    template: '<canvas width="400" height="100"></canvas>',


    ready() {

        var data = {
            labels: ['January', 'February', 'March'],
        
            datasets: [
                {
                    fillColor: "rgba(255,87,51,0.2)",
                    strokeColor: "rgba(255,87,51,1)",
                    pointColor: "rgba(255,87,51,1)",
                    pointStrokeColor: "#fff",
                    pointHighlightFill: "#fff",
                    pointHighlightStroke: "rgba(255,87,51,1)",
                    data: [30, 122, 90]
                },
                {
                    fillColor: "rgba(255, 230, 49,0.7)",
                    strokeColor: "rgba(255, 230, 49,1)",
                    pointColor: "rgba(255, 230, 49,1)",
                    pointStrokeColor: "#fff",
                    pointHighlightFill: "#fff",
                    pointHighlightStroke: "rgba(255, 230, 49,1)",
                    data: [10, 52, 2]
                }
            ]
        };

        var context = this.$el.getContext('2d');

        // new Chart(context).Line(data);
        new Chart(context, {
            type: 'bar',
            data: data
        });

    }
}