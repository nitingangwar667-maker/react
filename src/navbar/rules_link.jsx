import { Link as RouterLink } from 'react-router-dom'

const RulesLink = () => {
  return (
    <li className="nav-item">
      <RouterLink className="nav-link" to="/rules">
        Rules
      </RouterLink>
    </li>
  )
}

export default RulesLink;