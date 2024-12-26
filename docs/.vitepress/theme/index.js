import DefaultTheme from "vitepress/theme";
import queryHack from "../custom_scripts/search_query_hack";
import GenericTable from '../components/GenericTable.vue'
import { onMounted, watch, nextTick } from 'vue';
import { useRoute } from 'vitepress';
import mediumZoom from 'medium-zoom';
import "./custom.scss";

export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    queryHack();
    app.component("GenericTable", GenericTable)
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
