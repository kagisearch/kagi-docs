import DefaultTheme from "vitepress/theme";
import queryHack from "../custom_scripts/search_query_hack";
import { onMounted, watch, nextTick } from 'vue';
import { useRoute } from 'vitepress';
import mediumZoom from 'medium-zoom';
import "sortable-tablesort/dist/sortable-base.css";
import "./custom.scss";

export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    queryHack();
    if (!import.meta.env.SSR) {
      import('sortable-tablesort/dist/sortable.js');
    }
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
