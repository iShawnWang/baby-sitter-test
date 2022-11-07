
import { Link } from 'umi'
import * as SDK from './sdks'
import * as Errors from './jserror'
import * as Network from './network'
import * as Resource from './resource'
import * as ThirdParty from './thirdparty'

export default function IndexPage() {

  return (
    <>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <h1>加载 SDK</h1>
        {Object.entries(SDK).map(([key, value]) => {
          return <button key={key} onClick={value}>{key}</button>
        })}
      </div>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <h1>错误</h1>
        {Object.entries(Errors).map(([key, value]) => {
          return <button key={key} onClick={value}>{key}</button>
        })}
      </div>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <h1>导航跳转</h1>
        <Link to="/page2">Umi Link</Link>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <h1>网络</h1>
        {Object.entries(Network).map(([key, value]) => {
          return <button key={key} onClick={value}>{key}</button>
        })}
      </div>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <h1>资源</h1>
        {Object.entries(Resource).map(([key, value]) => {
          return <button key={key} onClick={value}>{key}</button>
        })}
      </div>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <h1>三方SDK兼容</h1>
        {Object.entries(ThirdParty).map(([key, value]) => {
          return <button key={key} onClick={value}>{key}</button>
        })}
      </div>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <h1>React 相关</h1>
        <Link to="/react">React 相关</Link>
      </div>
    </>
  );
}