import { ComponentClass } from 'react';
import Taro, { Component, Config } from '@tarojs/taro';
import { View, Text } from '@tarojs/components';

import './my.less';
import AtHeader from './../../components/AtHeader';
import { AtList, AtListItem } from 'taro-ui';

// #region 书写注意
//
// 目前 typescript 版本还无法在装饰器模式下将 Props 注入到 Taro.Component 中的 props 属性
// 需要显示声明 connect 的参数类型并通过 interface 的方式指定 Taro.Component 子类的 props
// 这样才能完成类型检查和 IDE 的自动提示
// 使用函数模式则无此限制
// ref: https://github.com/DefinitelyTyped/DefinitelyTyped/issues/20796
//
// #endregion

type PageStateProps = {};

type PageOwnProps = {};

type PageState = {};

type IProps = PageStateProps & PageOwnProps;

interface My {
  props: IProps;
}

class My extends Component {
  /**
   * 指定config的类型声明为: Taro.Config
   *
   * 由于 typescript 对于 object 类型推导只能推出 Key 的基本类型
   * 对于像 navigationBarTextStyle: 'black' 这样的推导出的类型是 string
   * 提示和声明 navigationBarTextStyle: 'black' | 'white' 类型冲突, 需要显示声明类型
   */

  componentWillReceiveProps(nextProps) {
    console.log(this.props, nextProps);
  }

  config: Config = {
    navigationBarTitleText: '我的',
  };
  navigateToLogin = () => {
    Taro.navigateTo({
      url: '/pages/login/login',
    });
  };

  render() {
    return (
      <View>
        <AtHeader title="Hello!" />
        <AtList>
          <AtListItem
            title="星享好礼"
            thumb="https://img12.360buyimg.com/jdphoto/s72x72_jfs/t6160/14/2008729947/2754/7d512a86/595c3aeeNa89ddf71.png"
            extraText="共0张"
          />
          <AtListItem
            title="追星站"
            thumb="http://img10.360buyimg.com/jdphoto/s72x72_jfs/t5872/209/5240187906/2872/8fa98cd/595c3b2aN4155b931.png"
          />
          <AtListItem
            title="消费记录"
            thumb="http://img12.360buyimg.com/jdphoto/s72x72_jfs/t10660/330/203667368/1672/801735d7/59c85643N31e68303.png"
          />
          <AtListItem
            title="设置"
            thumb="http://img12.360buyimg.com/jdphoto/s72x72_jfs/t10660/330/203667368/1672/801735d7/59c85643N31e68303.png"
          />
          <AtListItem
            title="帮助与反馈"
            thumb="http://img12.360buyimg.com/jdphoto/s72x72_jfs/t10660/330/203667368/1672/801735d7/59c85643N31e68303.png"
          />
        </AtList>
        <View className="myWrapper">
          <Text>登录星巴克App享受更多精彩服务</Text>
          <Text onClick={() => this.navigateToLogin()}>立即登录</Text>
        </View>
      </View>
    );
  }
}

// #region 导出注意
//
// 经过上面的声明后需要将导出的 Taro.Component 子类修改为子类本身的 props 属性
// 这样在使用这个子类时 Ts 才不会提示缺少 JSX 类型参数错误
//
// #endregion

export default My as ComponentClass<PageOwnProps, PageState>;