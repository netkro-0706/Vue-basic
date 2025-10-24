import { shallowMount } from "@vue/test-utils";
import SignupForm from "./SignupForm.vue";

describe("SignupForm", () => {
  test("이메일 검사", () => {
    const wrapper = shallowMount(SignupForm, {
      data() {
        return {
          username: "a@a.com"
        }
      },
    })
    expect(wrapper.vm.isUsernameValid).toBe(true)
  });
  test("패스워드 검사", () => {
    const wrapper = shallowMount(SignupForm, {
      data() {
        return {
          password: "123"
        }
      },
    })
    expect(wrapper.vm.isPasswordValid).toBe(true)
  });
  test("닉네임 검사", () => {
    const wrapper = shallowMount(SignupForm, {
      data() {
        return {
          nickname: "nick"
        }
      },
    })
    expect(wrapper.vm.isNicknameValid).toBe(true)
  });
})