<template>
  <div>
    <n-h1>Contact Me</n-h1>
    <div align="center">
      <n-tabs :bar-width="28" type="line" class="custom-tabs" trigger="hover">
        <n-tab-pane name="Github" tab="Github">
          <n-card title="Github" hoverable>
            <template #cover>
              <n-icon :size="350" :component="LogoGithub" />
            </template>
            <n-avatar
              size="large"
              src="https://avatars.githubusercontent.com/u/72414103?v=4"
            />
            <n-gradient-text
              :gradient="{
                deg: 180,
                from: 'rgb(85, 85, 85)',
                to: 'rgb(170, 170, 170)',
              }"
            >
              Spbgzh </n-gradient-text
            ><br />
            <n-tag :bordered="false" type="info" round>
              Followers:
              <n-number-animation
                ref="numberAnimationInstRef"
                :from="0"
                :to="followers"
              />
              · Following:
              <n-number-animation
                ref="numberAnimationInstRef"
                :from="0"
                :to="following"
              />
              <template #icon>
                <n-icon :component="PeopleOutline" />
              </template>
            </n-tag>
            <a href="https://github.com/spbgzh">https://github.com/spbgzh</a>
          </n-card>
        </n-tab-pane>
        <n-tab-pane name="Email" tab="Email">
          <n-card title="Email" hoverable>
            <template #cover>
              <n-icon :size="350" :component="MailOutline" />
            </template>
            <n-gradient-text
              :gradient="{
                deg: 180,
                from: 'rgb(85, 85, 85)',
                to: 'rgb(170, 170, 170)',
              }"
            >
              zjjhgzh@gmail.com
            </n-gradient-text>
          </n-card>
        </n-tab-pane>
        <n-tab-pane name="Wechat" tab="Wechat">
          <n-card title="Wechat" hoverable>
            <template #cover>
              <n-icon :size="350" :component="LogoWechat" />
            </template>

            <n-gradient-text
              :gradient="{
                deg: 180,
                from: 'rgb(85, 85, 85)',
                to: 'rgb(170, 170, 170)',
              }"
            >
              Spbgzh
            </n-gradient-text>
          </n-card>
        </n-tab-pane>
        <n-tab-pane name="VK" tab="VK">
          <n-card title="VK" hoverable>
            <template #cover>
              <n-icon :size="350" :component="LogoVk" />
            </template>

            <n-gradient-text
              :gradient="{
                deg: 180,
                from: 'rgb(85, 85, 85)',
                to: 'rgb(170, 170, 170)',
              }"
            >
              zjjhgzh
            </n-gradient-text>
          </n-card>
        </n-tab-pane>
      </n-tabs>
    </div>
  </div>
</template>

<script lang="ts">
import type { AxiosResponse } from "axios";
import {
  LogoGithub,
  PeopleOutline,
  MailOutline,
  LogoWechat,
  LogoVk,
} from "@vicons/ionicons5";

export default defineComponent({
  data() {
    return {
      following: 0,
      followers: 0,
      public_repos: 0,
    };
  },
  mounted() {
    axios
      .get("https://api.github.com/users/spbgzh")
      .then((response: AxiosResponse) => {
        console.log(response.data);
        this.following = response.data.following;
        this.followers = response.data.followers;
        this.public_repos = response.data.public_repos;
      })
      .catch((error: any) => {
        console.log(error);
      });
  },
  setup() {
    return { LogoGithub, PeopleOutline, MailOutline, LogoWechat, LogoVk };
  },
});
</script>

<style scoped>
.n-gradient-text {
  font-size: 35px;
}

.custom-tabs .n-tabs-bar {
  background-color: transparent !important;
}

.custom-tabs .n-tabs-bar::after {
  position: absolute;
  content: "";
  left: 0;
  right: 0;
  top: 0;
  bottom: -2px;
  border-radius: 2px;
  background-color: var(--bar-color);
}

.n-card {
  max-width: 400px;
}
</style>
