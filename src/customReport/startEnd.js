const end = __SERAPH_HAS_MONITOR__.sendCustomEvent({name: 'checkout', metrics: {value: 38}, attributes:{channel: '抖音'}}, {defer: true})
end({attributes: {status: '成功'}})