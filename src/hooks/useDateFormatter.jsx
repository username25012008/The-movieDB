import React from 'react'

export default function useDateFormatter() {
  const formatDate = (release_date) => {
    const date = String(new Date(release_date)).split(' ')
    let full_date = date[1] + ' ' + date[2] + ' ' + date[3]
    return full_date
  }
  return { formatDate }
}
