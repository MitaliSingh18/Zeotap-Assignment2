interface ResponseData {
  [key: string]: {
    [key: string]: string;
  };
}

export const responses: ResponseData = {
  segment: {
    "set up a new source": `
# Setting up a new source in Segment

To set up a new source in Segment, follow these steps:

1. **Log in** to your Segment workspace
2. Navigate to **Sources** in the left sidebar
3. Click **Add Source**
4. Browse or search for the source type you want to add
5. Click on the source and follow the configuration steps
6. Enter a name for your source
7. Configure any source-specific settings
8. Click **Add Source** to complete the setup

For more detailed information, visit the [Segment documentation](https://segment.com/docs/connections/sources/).
    `,
    "create a destination": `
# Creating a destination in Segment

To create a destination in Segment:

1. **Log in** to your Segment workspace
2. Navigate to **Destinations** in the left sidebar
3. Click **Add Destination**
4. Search for the destination you want to add
5. Select the source you want to connect to this destination
6. Configure the destination-specific settings
7. Enable the destination when you're ready

For more information, check the [Segment Destinations documentation](https://segment.com/docs/connections/destinations/).
    `,
    "build an audience": `
# Building an audience in Segment

To build an audience in Segment:

1. Navigate to **Personas** in your Segment workspace
2. Click on **Audiences** in the left sidebar
3. Click **Create Audience**
4. Define your audience criteria using the audience builder
5. Set up the computation schedule
6. Name your audience
7. Click **Create Audience**

For more details, visit the [Segment Personas documentation](https://segment.com/docs/personas/).
    `,
    "track events": `
# Tracking events in Segment

To track events in Segment:

1. Implement the Segment snippet or SDK in your application
2. Use the \`analytics.track()\` method to record user actions
3. Provide an event name and properties

Example:
\`\`\`javascript
analytics.track('Item Purchased', {
  item_id: 'SKU-123',
  item_name: 'Product Name',
  price: 19.99,
  currency: 'USD'
});
\`\`\`

For more information, see the [Segment Analytics.js documentation](https://segment.com/docs/connections/sources/catalog/libraries/website/javascript/).
    `
  },
  mparticle: {
    "create a user profile": `
# Creating a user profile in mParticle

To create a user profile in mParticle:

1. Implement the mParticle SDK in your application
2. Use the identity API to identify users
3. Set user attributes and identities

Example (JavaScript):
\`\`\`javascript
mParticle.Identity.login({
  userIdentities: {
    email: "user@example.com",
    customerId: "123456"
  }
});

// Set user attributes
mParticle.Identity.getCurrentUser().setUserAttribute("name", "John Doe");
mParticle.Identity.getCurrentUser().setUserAttribute("premium_user", true);
\`\`\`

For more details, see the [mParticle Identity documentation](https://docs.mparticle.com/developers/sdk/web/identity/).
    `,
    "set up a data connection": `
# Setting up a data connection in mParticle

To set up a data connection in mParticle:

1. Log in to your mParticle dashboard
2. Navigate to **Setup > Inputs** or **Setup > Outputs**
3. Click **Add** next to the connection type you want to create
4. Select the platform you want to connect
5. Configure the connection settings
6. Save your configuration

For more information, visit the [mParticle Connections documentation](https://docs.mparticle.com/guides/platform-guide/connections/).
    `,
    "track events": `
# Tracking events in mParticle

To track events in mParticle:

1. Implement the mParticle SDK in your application
2. Use the appropriate event tracking method based on the event type

Example (JavaScript):
\`\`\`javascript
// Track a custom event
mParticle.logEvent(
  'Button Clicked',
  mParticle.EventType.Navigation,
  {
    'button_id': 'login_button',
    'page': 'homepage'
  }
);

// Track a commerce event
const product = mParticle.eCommerce.createProduct(
  'Product Name',
  'SKU-123',
  19.99,
  1
);

mParticle.eCommerce.logProductAction(
  mParticle.ProductActionType.Purchase,
  [product],
  {
    'transaction_id': 'T-123',
    'total': 19.99
  }
);
\`\`\`

For more details, see the [mParticle Event Tracking documentation](https://docs.mparticle.com/developers/sdk/web/event-tracking/).
    `
  },
  lytics: {
    "build an audience segment": `
# Building an audience segment in Lytics

To build an audience segment in Lytics:

1. Log in to your Lytics account
2. Navigate to **Audiences** in the left sidebar
3. Click **Create Audience**
4. Define your audience criteria using the segment builder
   - Add filters based on user attributes, behaviors, or events
   - Combine filters using AND/OR logic
5. Name your audience segment
6. Click **Save Audience**

For more information, visit the [Lytics Audience documentation](https://docs.lytics.com/product/audiences/).
    `,
    "collect data": `
# Collecting data in Lytics

To collect data in Lytics:

1. Implement the Lytics JavaScript tag on your website
2. Configure data collection settings in the Lytics dashboard
3. Use the Lytics API to send custom events

Example (JavaScript):
\`\`\`javascript
// Track a page view
window.jstag.send();

// Track a custom event
window.jstag.send({
  _e: 'custom_event',
  event_name: 'button_click',
  button_id: 'signup_button'
});
\`\`\`

For more details, see the [Lytics Data Collection documentation](https://docs.lytics.com/product/collect/).
    `,
    "create a campaign": `
# Creating a campaign in Lytics

To create a campaign in Lytics:

1. Log in to your Lytics account
2. Navigate to **Campaigns** in the left sidebar
3. Click **Create Campaign**
4. Select the campaign type (web, email, etc.)
5. Configure the campaign settings:
   - Select target audience
   - Define campaign content
   - Set campaign schedule
6. Review and activate your campaign

For more information, visit the [Lytics Campaigns documentation](https://docs.lytics.com/product/campaigns/).
    `
  },
  zeotap: {
    "integrate data": `
# Integrating data with Zeotap

To integrate your data with Zeotap:

1. Log in to your Zeotap account
2. Navigate to **Data Integration** in the dashboard
3. Click **Add New Integration**
4. Select the integration type:
   - Batch upload
   - API integration
   - Tag integration
5. Configure the integration settings
6. Map your data fields to Zeotap's schema
7. Activate the integration

For more details, visit the [Zeotap Data Integration documentation](https://docs.zeotap.com/home/en-us/).
    `,
    "create a segment": `
# Creating a segment in Zeotap

To create a segment in Zeotap:

1. Log in to your Zeotap account
2. Navigate to **Audience Builder** in the dashboard
3. Click **Create Segment**
4. Define your segment criteria:
   - Select attributes and behaviors
   - Set conditions and thresholds
   - Combine rules using AND/OR logic
5. Name your segment
6. Save and activate the segment

For more information, check the [Zeotap Audience Builder documentation](https://docs.zeotap.com/home/en-us/).
    `,
    "export data": `
# Exporting data from Zeotap

To export data from Zeotap:

1. Log in to your Zeotap account
2. Navigate to **Data Export** in the dashboard
3. Select the data you want to export
4. Choose the export format (CSV, JSON, etc.)
5. Configure export settings
6. Click **Export Data**
7. Download the exported file or set up an automated delivery

For more details, see the [Zeotap Data Export documentation](https://docs.zeotap.com/home/en-us/).
    `
  },
  general: {
    "not_found": `I don't have specific information about that in my knowledge base. Please try asking a more specific question about how to perform a task in Segment, mParticle, Lytics, or Zeotap.

You can try questions like:
- "How do I set up a new source in Segment?"
- "How can I create a user profile in mParticle?"
- "How do I build an audience segment in Lytics?"
- "How can I integrate my data with Zeotap?"`,
    
    "non_cdp": `I'm designed to answer questions about Customer Data Platforms (CDPs) like Segment, mParticle, Lytics, and Zeotap. 

I don't have information about that topic. Please ask me how to perform specific tasks within these CDP platforms, and I'll be happy to help!`,
    
    "comparison": `
# Comparing CDPs: Segment, mParticle, Lytics, and Zeotap

Each CDP has its own approach to common tasks:

## Audience Creation
- **Segment**: Uses Personas for audience building with a visual interface
- **mParticle**: Offers audience builder with real-time calculation capabilities
- **Lytics**: Focuses on behavioral audiences with machine learning capabilities
- **Zeotap**: Provides robust demographic and interest-based segmentation

## Data Collection
- **Segment**: Known for simple implementation with a single API
- **mParticle**: Offers extensive SDKs with built-in identity resolution
- **Lytics**: Specializes in behavioral data collection
- **Zeotap**: Strong in third-party data enrichment

## Integration Capabilities
- **Segment**: Largest ecosystem of pre-built integrations
- **mParticle**: Strong mobile-first approach
- **Lytics**: Focus on content personalization integrations
- **Zeotap**: Emphasis on advertising platform connections

For specific comparisons, please ask about particular features or use cases.
    `
  }
};