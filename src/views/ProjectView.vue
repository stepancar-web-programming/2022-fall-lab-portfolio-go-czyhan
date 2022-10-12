<template>
  <div>
    <n-card
      hoverable
      :segmented="{
        content: true,
        footer: 'soft',
      }"
    >
      <Markdown :source="data.content" />
      <template #footer>
        @Github Repository Address: <a :href="data.url">{{ data.url }}</a>
      </template>
    </n-card>
  </div>
</template>

<script lang="ts">
import Markdown from "vue3-markdown-it";
import { defineComponent, onMounted, reactive } from "vue";
import { getReadme } from "../request/api";

import { useRoute } from "vue-router";
const data = reactive({
  content: "",
  url: "",
});

export default defineComponent({
  components: {
    Markdown,
  },
  setup() {
    onMounted(() => {
      const meta = useRoute().meta;
      console.log(meta);
      const html: string = meta.html as string;
      const count: number = meta.count as number;
      try {
        getReadme(html).then((res) => {
          data.content = decodeURIComponent(
            Array.prototype.map
              .call(atob(res.data.content), function (c) {
                return "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2);
              })
              .join("")
          );
          var url = res.data.html_url;
          data.url = url.substring(url, url.length - count);
        });
      } catch (e) {
        console.log(e);
      }
    });
    return { data };
  },
});
</script>

<style scoped></style>
