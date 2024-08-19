<template>
    <div class="post">
        <SideNav/>
        <div class="home">
            <h2>コメント</h2>
            <Message/>
            <h3>コメント</h3>
            <div class="post-wrapper">
                <h4 class="post-name"></h4>
                <p class="post-user"></p>
            </div>
            <div class="comment-wrapper">
                <textarea name="comment" id="comment" v-model="contentComment"></textarea>
                <button class="comment-button" @click="sendComment">コメント</button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            contentComment: "",
        };
    },
    methods: {
        async sendComment() {
            const sendData = {
                user_id: this.user.id,
                post_id: this.post.id,
                comment: this.contentComment,
            };
            await this.$axios.post("http://127.0.0.1:80/api/comment/", sendData);
        },
    },
};
</script>