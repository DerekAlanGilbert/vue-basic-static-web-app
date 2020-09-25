import { ApplicationInsights } from '@microsoft/applicationinsights-web'

const appInsights = new ApplicationInsights({ config: {
  instrumentationKey: '5f162268-f5d1-4c31-86e5-8f73dba74f98'
} });

appInsights.loadAppInsights();

appInsights.trackEvent({
    name: 'App insights loaded',
  });

export default appInsights