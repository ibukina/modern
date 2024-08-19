<template>
    <div>
        <AuthHeader/>
        <div class="card">
            <p>新規登録</p>
            <div class="form">
                <validation-observer ref="obs" v-slot="ObserverProps">
                    <validation-provider v-slot="{errors}" rules="max:20">
                        <input type="text" name="name" placeholder="ユーザーネーム" v-model="name">
                        <input type="email" name="email" placeholder="メールアドレス" v-model="email">
                        <input type="password" name="password" placeholder="パスワード" v-model="password">
                        <button @click="register" :disabled="ObserverProps.invalid || !ObserverProps.validated">新規登録</button>
                    </validation-provider>
                </validation-observer>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            name: null,
            email: null,
            password: null,
        };
    },
    methods: {
        register() {
            if (!this.email || !this.password) {
                alert("メールアドレスまたはパスワードが入力されていません");
                return;
            }
            firebase
                .auth()
                .createUserWithEmailAndPassword(this.email, this.password)
                .then((data) => {
                    const sendData = {
                        id: data.user.uid,
                        name: this.name,
                    };
                    this.$axios.post("http://localhost:80/api/v1/user", sendData);
                    this.$router.replace("/login");
                })
                .catch((error) => {
                    switch (error.code) {
                        case "auth/invalid-email":
                            alert("メールアドレスの形式が違います");
                            break;
                        case "auth/email-already-in-use":
                            alert("このメールアドレスは既に使われています");
                            break;
                        case "auth/weak-password":
                            alert("パスワードは6文字以上で入力してください");
                            break;
                        default:
                            alert("エラーが起きました。しばらくしてから再度お試しください。");
                            break;
                    }
                });
        },
    },
};
</script>

<style scoped>
button{
    width: 100%;
    text-align: center;
    padding: 8px 0 10px;
    color: #fff;
    background-color: #5419da;
    border-radius: 25px;
    cursor: pointer;
}
.card{
    margin: 100px auto;
    width: 350px;
    background: #fff;
    border-radius: 5px;
    padding: 20px;
}
.card p{
    color: black;
    font-weight: bold;
    text-align: center;
}
input{
    margin-top: 15px;
    width: 80%;
    border-radius: 10px;
    padding: 10px;
    border: 1px solid black;
    color: black;
}
.form{
    text-align: center;
}
.form button{
    margin-top: 15px;
}
.error{
    margin-top: 10px;
    color: red;
}
</style>