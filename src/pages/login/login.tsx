import Taro from '@tarojs/taro';
import { AtForm, AtInput, AtButton, AtMessage } from 'taro-ui';
import { View, Text, Image } from '@tarojs/components';
import { connect } from '@tarojs/redux';
import AtHeader from './../../components/AtHeader';
import './Login.less';
import Alipay from './../../images/alipay.png';
import taobao from './../../images/taobao.png';
import authAction from './../../actions/authAction';
import { lsSave } from './../../utils';
import api from './../../service/api';
import ANavBar from './../../components/ANavBar'

interface K {}
interface T {
  openid: string;
  password: string;
  sumbitLoading: boolean;
}
class Index extends Taro.Component<K, T> {
  constructor(props) {
    super(props);
    this.state = {
      openid: '',
      password: '',
      sumbitLoading: false,
    };
  }
  handleChangeOpenid(openid) {
    this.setState({
      openid,
    });
  }
  handleChangePwd(password) {
    this.setState({
      password,
    });
  }
  navigateToRegister() {
    Taro.navigateTo({
      url: '/pages/register/register',
    });
  }
  onSubmit(event) {
    this.setState({
      sumbitLoading: true,
    });
    api.post('login', event.detail.value).then(res => {
      if (res.data.code === 0) {
        authAction.login(event.detail.value.openid);
        this.showMessage(res.data.msg);
        lsSave('openid', event.detail.value.openid);
        authAction.getUserInfo({ openid: event.detail.value.openid });
        Taro.navigateBack();
      }
      this.setState({
        sumbitLoading: false,
      });
    });
  }
  showMessage(msg: string) {
    Taro.atMessage({
      message: msg,
      type: 'success',
    });
  }
  showToast() {
    Taro.showToast({
      title: '暂未开放',
      icon: 'none',
    });
  }
  render() {
    const { openid, password, sumbitLoading } = this.state;
    return (
      <View>
        <AtMessage />
        <ANavBar />
        <AtHeader title="欢迎来到星享俱乐部" />
        <AtForm className="dd-padding loginForm" onSubmit={this.onSubmit.bind(this)}>
          <AtInput
            name="openid"
            title="用户ID"
            type="text"
            placeholder="请输入用户ID"
            value={openid}
            onChange={this.handleChangeOpenid.bind(this)}
          />
          <AtInput
            name="password"
            title="密码"
            type="password"
            placeholder="请输入密码"
            value={password}
            onChange={this.handleChangePwd.bind(this)}
          />
          <View className="dd-padding forgetText">
            <Text>忘记密码？</Text>
          </View>
          <View className="dd-padding loginBtn">
            <AtButton
              loading={sumbitLoading}
              type="primary"
              formType="submit"
              disabled={!openid || !password}
            >
              登录
            </AtButton>
          </View>
          <View className="dd-padding registerBtn">
            <AtButton type="primary" onClick={this.navigateToRegister.bind(this)}>
              注册
            </AtButton>
          </View>
        </AtForm>
        <View className="thirdAuth">
          <Text>使用以下方式进行账户登录/注册</Text>
          <View style="margin-top:10px">
            <Image
              onClick={this.showToast.bind(this)}
              style="width:30px;height:30px;margin-right:10px"
              src={taobao}
            />
            <Image
              onClick={this.showToast.bind(this)}
              style="width:30px;height:30px"
              src={Alipay}
            />
          </View>
        </View>
      </View>
    );
  }
}

export default connect()(Index);
