import DefaultTheme from "vitepress/theme";
import SortableTable from '../custom_scripts/SortableTable.vue';
import queryHack from "../custom_scripts/search_query_hack";
import { onMounted, watch, nextTick } from 'vue';
import { useRoute } from 'vitepress';
import mediumZoom from 'medium-zoom';
import "./custom.scss";

export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    app.component('SortableTable', SortableTable);
    queryHack();
  },
  setup() {
    const route = useRoute();
    const initZoom = () => {
      mediumZoom('[data-zoomable]', { background: 'var(--vp-c-bg)' }); 
    };
    onMounted(() => {
      initZoom();
    });
    watch(
      () => route.path,
      () => nextTick(() => initZoom())
    );
  },
};
