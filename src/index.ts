// welcome to nextgen
// have fun ;)
// ~ penguinify
// jk ik u wont have fun

import { VERSION, ITERATION, NAME, CREATOR, ENV } from './constants'
import { setup } from './penex'
import './styles/sidebar.less'
import './styles/index.less'
import './styles/utils.less'
import './styles/maincontent.less'
import './styles/content.less'
import { checkForUpdate, track } from './database'
import { layout } from './gui/layout'
import { components, notificationbar } from './gui/app'
import { DeviceType } from './penexutils'

console.log(DeviceType)

// checks if car axle already exists

// @ts-ignore
if (window.caraxle) {
    console.error('sad spongebob is already running, exiting...')
    throw new Error('sad spongebob is already running')
}

//@ts-ignore
window.caraxle = true

function main() {
    track()
    console.info(`${VERSION}.${ITERATION} ${NAME} by ${CREATOR} (${ENV}), thank you from sad spongebob`)
    if (ENV === 'development') {
        console.warn('sad spongebob mode is enabled, your cool to do whatever you want')
        notificationbar.showNotification('sad spongebob Mode', 'sad spongebob mode is enabled, your cool to do whatever you want')
    }

    setup('app-fuk-u', layout, components)

    // obviously the update checker
    checkForUpdate().then((update: boolean) => {
        if (update) {
            console.warn('Client outdated, please install the latest version!')
            notificationbar.showNotification("You're on an outdated version!", `Update to the latest version. (Currently on v${VERSION}.${ITERATION})`)
        }
    })

    let quotes = require('./assets/quotes.json')

    notificationbar.showNotification(`${quotes[Math.floor(Math.random() * quotes.length)]}`, `v${VERSION}.${ITERATION} by penguinify. enjoy your stay ;)`)
}

// i hope this works...
main()
