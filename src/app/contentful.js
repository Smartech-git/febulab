'use server'
import { createClient } from 'contentful'
import {cache } from 'react'

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN
})

export const getContacts = cache(async () => {
  let res = await client.getEntry(process.env.CONTACTS_ENTRY_ID);
  return JSON.stringify(res)
})

export const getSocialsDetials = cache(async () => {
  const res = await client.getEntry(process.env.SOCIALS_ENTRY_ID)
  return JSON.stringify(res)

})

export const getLabEquipImgs = cache(async () => {
  // let  res = await client.getContentType(process.env.LAB_EQUIP_HOME_CONTENT_ID)
  let res = await client.getEntries({content_type: process.env.LAB_EQUIP_HOME_CONTENT_ID})
  return JSON.stringify(res)
})

export const getLabEquip = cache(async () => {
  let res = await client.getEntries({content_type: process.env.LAB_EQUIP})
  return JSON.stringify(res)
})

export const getLabApp = cache(async () => {
  let res = await client.getEntries({content_type: process.env.LAB_APP})
  return JSON.stringify(res)
})

export const getLabCon = cache(async () => {
  let res = await client.getEntries({content_type: process.env.LAB_CON})
  return JSON.stringify(res)
})

export const getOthers = cache(async () => {
  let res = await client.getEntries({content_type: process.env.OTHERS})
  return JSON.stringify(res)
})


