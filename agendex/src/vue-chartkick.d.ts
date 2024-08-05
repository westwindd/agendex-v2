declare module 'vue-chartkick' {
    import { ComponentOptions } from 'vue';
    const VueChartkick: {
      install: (app: any, options?: any) => void;
    };
    const LineChart: ComponentOptions;
    const PieChart: ComponentOptions;
    const ColumnChart: ComponentOptions;
    const BarChart: ComponentOptions;
    const AreaChart: ComponentOptions;
    const ScatterChart: ComponentOptions;
    const GeoChart: ComponentOptions;
    const Timeline: ComponentOptions;
    export {
      VueChartkick,
      LineChart,
      PieChart,
      ColumnChart,
      BarChart,
      AreaChart,
      ScatterChart,
      GeoChart,
      Timeline
    };
  }
  