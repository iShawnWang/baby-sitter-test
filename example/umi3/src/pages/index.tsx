
import { Link } from 'umi'
import * as Errors from '../../../../src/jserror'
import * as Network from '../../../../src/network'

export default function IndexPage() {

  return (
    <>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <h1>Errors</h1>
        {Object.keys(Errors).map(e => {
          return <button key={e} onClick={Errors[e]}>{e}</button>
        })}
      </div>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <h1>Navigation</h1>
        <Link to="/page2">Umi Link</Link>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <h1>Network</h1>
        {Object.keys(Network).map(e => {
          return <button key={e} onClick={Network[e]}>{e}</button>
        })}
      </div>
    </>
  );
}