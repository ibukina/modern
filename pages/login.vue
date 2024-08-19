<template>
    <div>
        <AuthHeader/>
        <div class="login">
            <h2>ログイン</h2>
            <input type="email" name="email" id="email" placeholder="メールアドレス" v-model="sendEmail">
            <input type="password" name="password" id="password" placeholder="パスワード" v-model="sendPassword">
            <button @click="userLogin">ログイン</button>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            sendEmail: "",
            sendPassword: "",
        };
    },
    methods: {
        async userLogin() {
            const sendData = {
                email: this.sendEmail,
                password: this.sendPassword,
            };
            await this.$axios.post("http://127.0.0.1:80/api/auth/", sendData);
        },
    },
};
</script>