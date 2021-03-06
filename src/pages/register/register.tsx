import { ComponentClass } from 'react';
import Taro, { Component } from '@tarojs/taro';
import { View } from '@tarojs/components';
import { AtForm, AtInput, AtButton, AtMessage } from 'taro-ui';
import AtHeader from './../../components/AtHeader';
import api from './../../service/api';
import ANavBar from './../../components/ANavBar'
import './register.less'

type PageStateProps = {};

type PageDispatchProps = {};

type PageOwnProps = {};

type PageState = {
  openid: string;
  username: string;
  password: string;
  sumbitLoading: boolean;
};

type IProps = PageStateProps & PageDispatchProps & PageOwnProps;

interface Register {
  props: IProps;
  state: PageState;
}

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      openid: '',
      username: '',
      password: '',
      sumbitLoading: false,
    };
  }
  handleOpenidChange(value) {
    this.setState({
      openid: value.replace(/[^A-Za-z0-9_]\s*/g,''),
    });
  }
  handleUsernameChange(value) {
    this.setState({
      username: value,
    });
  }
  handlePasswordChange(value) {
    this.setState({
      password: value,
    });
  }
  onSubmit(event) {
    this.setState({
      sumbitLoading: true,
    });
    api.post('register', event.detail.value).then(res => {
      this.setState({
        sumbitLoading: false,
      });
      if (res.data.code === 0) {
        this.showMessage(res.data.msg)
        Taro.navigateBack();
      }
    });
  }
  showMessage(msg: string) {
    Taro.atMessage({
      message: msg,
      type: 'success',
    });
  }

  render() {
    return (
      <View className="registerWrapper">
        <AtMessage />
        <ANavBar />
        <AtHeader title="注册" />
        <AtForm className="dd-padding" onSubmit={this.onSubmit.bind(this)}>
          <AtInput
            name="openid"
            maxLength={20}
            title="用户ID"
            type="text"
            placeholder="支持英文和数字，用于登录"
            value={this.state.openid}
            onChange={this.handleOpenidChange.bind(this)}
          />
          <AtInput
            name="username"
            title="真实姓名"
            maxLength={15}
            type="text"
            placeholder="请输入真实姓名"
            value={this.state.username}
            onChange={this.handleUsernameChange.bind(this)}
          />
          <AtInput
            name="password"
            title="密码"
            maxLength={20}
            type="password"
            placeholder="请输入密码"
            value={this.state.password}
            onChange={this.handlePasswordChange.bind(this)}
          />

          <AtButton className="submitBtn" loading={this.state.sumbitLoading} type="primary" formType="submit">
            提交
          </AtButton>
        </AtForm>
      </View>
    );
  }
}
export default Register as ComponentClass<PageOwnProps, PageState>;
