export default {
    data() {
      return {
        // 登录表单的数据对象
        loginForm: {
          username: 'admin',
          password: '123456'
        },
        // 登录表单的验证规则对象
        loginFormRules: {
          // 登录名称的验证规则
          username: [{ required: true, message: '请输入用户名称', trigger: 'blur' }],
          password: [{ required: true, message: '请输入用户密码', trigger: 'blur' }]
        }
      }
    },
    methods: {
      // 点击重置按钮，重置表单
      resetForm() {
        this.$refs.loginFormRef.resetFields()
      },
      // 点击按钮，实现登录
      login() {
        // 1. 进行表单验证
        this.$refs.loginFormRef.validate(async valid => {
          if (!valid) return
          const { data: res } = await this.$http.post('login', this.loginForm)
          if (res.meta.status !== 200) return this.$message.error('登录失败！')
          this.$message.success('登录成功！')
          window.sessionStorage.setItem('token', res.data.token)
          this.$router.push('/home')
        })
      }
    }
  }
  