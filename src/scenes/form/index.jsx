import { Box, Button, TextField } from "@mui/material";
import { Formik } from "formik";
import * as yup from "yup";
import useMediaQuery from "@mui/material/useMediaQuery";
import Header from "../../components/Header";


const Form = () => {
  //媒体查询：当屏幕宽度大于等于600px时，该样式生效。在本项目中认为屏幕宽度小于600px时设备为手机
  const isNonMobile = useMediaQuery("(min-width:600px)")
  //常量放在return上面和下面的区别 ??
  // <Formik>设置initialValues表单各输入框初始值，在每个输入框设置value={values.firstName}可实现收集数据。
  //整个表单收集的数据在哪里/在哪个组件上？？  handleFormSubmit的回调参数可以获取到values
  const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    contact: "",
    address1: "",
    address2: "",
  }
  // 各种常用输入类型的正则表达式在网上/StackOverflow上都能找到
  const phoneRegExp =
  /^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/;
  
  // Yup中对email类型有默认的校验规则，可直接使用api
  const checkoutSchema = yup.object().shape({
    firstName: yup.string().required("required"),
    lastName: yup.string().required("required"),
    email: yup.string().email("invalid email").required("required"),
    contact: yup
      .string()
      .matches(phoneRegExp, "Phone number is not valid")
      .required("required"),
    address1: yup.string().required("required"),
    address2: yup.string().required("required"),
  });
  // 点击提交按钮，不触发表单提交事件 ？？ 如果直接设置<form>的onSubmit回调函数可以出发表单提交事件(虽然控制台输出信息一闪而过)
  // 从官网复制过来的代码，<Formik>中设置了validate 验证规则，不通过验证无法提交表单(但是没有验证不通过的提示)
  // 正确的顺序应该是先把最基础的功能完成、删除多余代码，然后一点点完善
   const handleFormSubmit =  ( values ) => {
    console.log("Submit Form", values)
  }


  return (
    <Box m="20px">
      <Header title="CREATE USER" subtitle="Create a New User Profile" />
      <Formik
       initialValues={initialValues}
       onSubmit={handleFormSubmit}
       validationSchema={checkoutSchema}
     >
      {/*  <Formik>标签体之间放置一个返回表单<form>的函数，可以用到props中的属性及方法。也可以直接放置表单元素*/}
       {({
         values,
         errors,
         touched,
         handleChange,
         handleBlur,
         handleSubmit,
         isSubmitting,
         /* and other goodies */
       }) => (
         <form onSubmit={handleSubmit}>
          {/* CSS grid 网格布局 https://www.cnblogs.com/xiaohuochai/p/7083153.html 
            gridColumn： span后面紧随数字，表示合并多少个列或行
            minmax(0, 1fr)强制指定列宽相等
          */}
            <Box 
              display="grid"
              gap="30px"
              gridTemplateColumns="repeat(4, minmax(0, 1fr))"
              // "& > div"是CSS中子代选择器的写法，加在了子元素div .MuiFormControl-root上
              // 如果视口宽度够大，则使用下方<TextField>中设置的gridColumn样式
              // 如果视口宽度小于600px，则每个<TextField>的gridColumn设置为"span 4" : firstName和lastName分别占一行
              sx={{
                "& > div": { gridColumn: isNonMobile ? undefined : "span 4" },
              }}
            >
              {/* 
                TextField中label和placeholder的区别？？--都显示在文本框内，但样式不同；当鼠标聚焦时，label从文本框内移动到文本框上方，placeholder要输入文字再消失
                如果<TextField>不设置onChange={handleChange}文本框无法输入内容  ？？
                判断当前的表单数据是否被更改formik.touched
                touch和touched这个词在Formik中普遍使用，意思是表单中某个字段被点击过，此时用户可能没有输入什么数据，也有可能输入了新的数据，都称为touched。
                touched是什么？？--只要字段被点击过、该字段对应的touched值则为true ？
                需要设置onBlur={handleBlur}才能出发表单验证
                同时使用两个叹号（!!），相当于调用了转型函数 Boolean()。
    
              */}
              <TextField
                // fullWidth
                variant="filled"
                label="First Name"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.firstName}
                name="firstName"
                error={!!touched.firstName && !!errors.firstName}
                helperText={touched.firstName && errors.firstName}
                sx={{ gridColumn: "span 2"}}
              />
              <TextField
                // fullWidth
                variant="filled"
                label="Last Name"
                onChange={handleChange}
                value={values.lastName}
                name="lastName"
                sx={{ gridColumn: "span 2"}}
              />
              <TextField
                variant="filled"
                label="Email"
                name="email"
                onChange={handleChange}
                value={values.email}
                sx={{ gridColumn: "span 4"}}
              />
              <TextField
                variant="filled"
                label="Contact Number"
                // placeholder="Contact Number"
                name="contact"
                onChange={handleChange}
                value={values.contact}
                sx={{ gridColumn: "span 4"}}
              />
              <TextField
                variant="filled"
                label="Address 1"
                onChange={handleChange}
                value={values.address1}
                name="address1"
                sx={{ gridColumn: "span 4"}}
              />
              <TextField
                variant="filled"
                label="Address 2"
                onChange={handleChange}
                value={values.address2}
                name="address2"
                sx={{ gridColumn: "span 4"}}
              />
            </Box>
            {/* 想让按钮靠右对齐可以使用flex布局，不必使用float */}
            <Box display="flex" justifyContent="end" mt="20px">
              {/* 用到了theme.js中的secondary"*/}
              <Button type="submit" variant="contained" color="secondary">
                  Create New User
              </Button>
            </Box>
         </form>
       )}
     </Formik>
    </Box>
  )
}

export default Form