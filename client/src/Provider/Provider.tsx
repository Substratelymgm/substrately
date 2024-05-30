import React from 'react'
import { Provider } from 'react-redux'
import { store} from '../app/store/store'

const ProviderFamily: React.FC<{ children: React.ReactElement }> = ({ children }) => {
  return (
    <Provider store={store}>
    {children}
    </Provider>
  )
}

export default ProviderFamily