แก้ไขไฟล์ ./node_modules/@ionic/app-scripts/config/rollup.config.js

ในส่วนของ `plugins` (ไฟล์ตัวอย่าง ./sample/rollup.config.js)

```
commonjs({
  namedExports: { 'node_modules/angular2-highcharts/index.js':['ChartModule', 'CHART_DIRECTIVES']}
})
```