"use client";

import Image from "next/image";
import CalendarComponent from "./components/CalendarComponent";

export default function Home() {
  return (
    <div id="appointment-screen">
      <main>
        <h1>Bienvenue sur notre plateforme</h1>
        <CalendarComponent /> 
      </main>
    </div>
  );
}

 
// DATA RECEIVED FROM API

// {
//   "id": 7467922,
//   "uid": "c4fdJe37TTh9Dr2TZxP1aK",
//   "idempotencyKey": "3b83e40a-51da-5891-b5bb-83679bad17a5",
//   "userId": 1381468,
//   "userPrimaryEmail": "dannielgbogou@gmail.com",
//   "eventTypeId": 2326612,
//   "title": "TEST between Daniel Gbogou and Ab test ",
//   "description": "",
//   "customInputs": {},
//   "responses": {
//       "name": "Ab test ",
//       "email": "ab@gmail.com",
//       "guests": [],
//       "location": {
//           "value": "integrations:google:meet",
//           "optionValue": ""
//       }
//   },
//   "startTime": "2025-04-28T07:30:00.000Z",
//   "endTime": "2025-04-28T07:45:00.000Z",
//   "location": "integrations:google:meet",
//   "createdAt": "2025-04-27T18:24:56.304Z",
//   "updatedAt": "2025-04-27T18:24:56.304Z",
//   "status": "ACCEPTED",
//   "paid": false,
//   "destinationCalendarId": 482085,
//   "cancellationReason": null,
//   "rejectionReason": null,
//   "reassignReason": null,
//   "reassignById": null,
//   "dynamicEventSlugRef": null,
//   "dynamicGroupSlugRef": null,
//   "rescheduled": null,
//   "fromReschedule": null,
//   "recurringEventId": null,
//   "smsReminderNumber": null,
//   "scheduledJobs": [],
//   "metadata": {},
//   "isRecorded": false,
//   "iCalUID": "c4fdJe37TTh9Dr2TZxP1aK@Cal.com",
//   "iCalSequence": 0,
//   "rating": null,
//   "ratingFeedback": null,
//   "noShowHost": false,
//   "oneTimePassword": null,
//   "cancelledBy": null,
//   "rescheduledBy": null,
//   "creationSource": "WEBAPP",
//   "user": {
//       "email": null,
//       "name": "Daniel Gbogou",
//       "timeZone": "Europe/Paris",
//       "username": "daniel-gbogou-y44moc"
//   },
//   "attendees": [
//       {
//           "id": 8787187,
//           "email": "ab@gmail.com",
//           "name": "Ab test ",
//           "timeZone": "Europe/Paris",
//           "phoneNumber": null,
//           "locale": "en",
//           "bookingId": 7467922,
//           "noShow": false
//       }
//   ],
//   "payment": [],
//   "references": [
//       {
//           "type": "google_calendar",
//           "uid": "_ccq6cp2ackpjel2kd0sk8shiahd7gk1hc55k0gr1dgn66rrd",
//           "thirdPartyRecurringEventId": null,
//           "meetingId": "_ccq6cp2ackpjel2kd0sk8shiahd7gk1hc55k0gr1dgn66rrd",
//           "meetingPassword": "",
//           "meetingUrl": "https://meet.google.com/mdi-qasi-utf",
//           "externalCalendarId": "dannielgbogou@gmail.com",
//           "credentialId": 790587
//       },
//       {
//           "type": "google_meet_video",
//           "meetingUrl": "https://meet.google.com/mdi-qasi-utf",
//           "uid": "c4fdJe37TTh9Dr2TZxP1aK",
//           "credentialId": 790587
//       }
//   ],
//   "appsStatus": [
//       {
//           "appName": "google-calendar",
//           "type": "google_calendar",
//           "success": 1,
//           "failures": 0,
//           "errors": [],
//           "warnings": []
//       },
//       {
//           "appName": "Google Meet",
//           "type": "conferencing",
//           "success": 1,
//           "failures": 0,
//           "errors": []
//       }
//   ],
//   "paymentRequired": false,
//   "luckyUsers": [],
//   "isDryRun": false,
//   "videoCallUrl": "https://meet.google.com/mdi-qasi-utf"
// }