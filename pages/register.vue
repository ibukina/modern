<template>
    <div>
        <AuthHeader/>
        <div class="register">
            <h2>新規登録</h2>
            <input type="text" name="name" id="name" placeholder="ユーザーネーム" v-model="newName">
            <input type="email" name="email" id="email" placeholder="メールアドレス" v-model="newEmail">
            <input type="password" name="password" id="password" placeholder="パスワード" v-model="newPassword">
            <button @click="userRegister">新規登録</button>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            newName: "",
            newEmail: "",
            newPassword: "",
        };
    },
    methods: {
        async userRegister() {
            const sendData = {
                name: this.newName,
                email: this.newEmail,
                password: this.newPassword,
            };
            await this.$axios.post("http://127.0.0.1:80/api/user/", sendData);
        },
    },
};
</script>