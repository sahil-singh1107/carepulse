import * as sdk from 'node-appwrite'

export const {
    PROJECT_ID, API_KEY, DATABASE_ID, PATIENT_COLLECTION_ID, DOCTOR_COLLECTION_ID, APPOINTMENT_COLLECTION_ID, NEXT_PUBLIC_BUCKET_ID: BUCKET_ID,
    NEXT_PUBLIC_ENDPOINT: ENDPOINT
} = process.env

const client = new sdk.Client()

client
    .setEndpoint('https://cloud.appwrite.io/v1')
    .setProject('66881fbb000902504e57')
    .setKey('9a579aa9a41b49327f4d822e22f5ccad60e05562c2b7bedb466b6813a535945d5f7bd4a58aefe790faac8f6d561cb2c27a1847179df035e29d38a580c269be256d71a4db9a46b68dc08ef8dacfd32931481b7448a6ddf8c470a98956afd8e6ea82281d3666c5078e43792d90e3aed4c31c51a91084628d1f59b5c26040dbc219')

export const databases = new sdk.Databases(client)
export const storage = new sdk.Storage(client)
export const messaging = new sdk.Messaging(client)
export const users = new sdk.Users(client)