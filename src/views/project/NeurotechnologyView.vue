<template>
    <div>
        <n-card hoverable :segmented="{
          content: true,
          footer: 'soft'
        }">
            <Markdown :source="data.content" />
            <template #footer>
                @Github Repository Address: <a :href="data.url">{{data.url}}</a>
            </template>
        </n-card>
    </div>
</template>

<script lang="ts">

import Markdown from 'vue3-markdown-it';
import { defineComponent, onMounted, reactive } from 'vue'
import { getReadme } from '../../request/api'

const data = reactive({
    content: "",
    url: ""
})

export default defineComponent({
    components: {
        Markdown
    },
    setup() {
        onMounted(() => {
            getReadme("https://api.github.com/repos/spbgzh/Neurotechnology-And-Programming-Courses/readme").then(res => {
                data.content = decodeURIComponent(escape(window.atob(res.data.content)))
                var url = res.data.html_url
                data.url = url.substring(url, url.length - 22);
            })
        });
        return { data }
    }
})
</script>

<style scoped>

</style>