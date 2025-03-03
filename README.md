# sequestrae-dashboard

Open-source biochar project risk &amp; compliance analysis platform

## Developer Guide

### Folder Structure

```
/app
  /project
    /[projectId]
      /delivery
        page.tsx      # Delivery risk analysis page
      /environment
        page.tsx      # Environmental impact analysis page
      /policy
        page.tsx      # Policy compliance analysis page
      /social
        page.tsx      # Social impact analysis page
      page.tsx        # Main project overview page
  /ui
    /projectPage
      LeftSidebar.tsx         # Navigation sidebar for project pages
      MainContentArea.tsx     # Layout wrapper for content sections
      ProjectLayout.tsx       # Layout wrapper for project pages
      RiskFactorCard.tsx      # Display component for individual risk factors
      StandardTopicPage.tsx   # Template for topic pages (not shown in files)
      SubtopicSection.tsx     # Groups related risk factors
      TopicIntro.tsx          # Introduction section for topics
      TopicSummaryCard.tsx    # Summary card for topic highlights
      TopNavBar.tsx           # Top navigation bar
      subtopicData.ts         # Contains navigation data for subtopics
```

### Component Roles

#### Layout Components

- **ProjectLayout**: Provides a consistent structure across all project pages. Handles the overall layout including the top navbar and sidebar.
- **MainContentArea**: Arranges topic content in a standardized layout with intro, summary card, and subtopic sections.

#### Navigation Components

- **TopNavBar**: Main navigation bar at the top of all project pages.
- **LeftSidebar**: Side navigation panel that displays subtopic links based on the current topic.

#### Content Display Components

- **RiskFactorCard**: Displays detailed information about specific risk factors. Features collapsible sections and tabbed interfaces for viewing different aspects of each risk factor.
- **SubtopicSection**: Groups related risk factors under a subtopic heading.
- **TopicIntro**: Displays the title and description for a topic.
- **TopicSummaryCard**: Shows summarized strengths, considerations, and actions for a topic.

#### Page Components

- **StandardTopicPage**: Template component used by all topic pages (delivery, environment, policy, social) to maintain consistent structure.

### Component Interactions

1. **Page Routing Flow**:

   - Next.js routes a request to a specific page component (e.g., `.../social/page.tsx`)
   - The page component loads `StandardTopicPage` with the appropriate `topicId`

2. **Layout Composition**:

   - `StandardTopicPage` uses `ProjectLayout` to create the base structure
   - `ProjectLayout` renders `TopNavBar` and `LeftSidebar` with the appropriate navigation items
   - The main content area is populated with `MainContentArea`

3. **Content Rendering**:

   - `MainContentArea` organizes content using `TopicIntro`, `TopicSummaryCard`, and multiple `SubtopicSection` components
   - Each `SubtopicSection` contains multiple `RiskFactorCard` components to display detailed risk information

4. **Data Flow**:

   - `subtopicData.ts` provides navigation data to `LeftSidebar` through `ProjectLayout`
   - Topic-specific data (risk factors, summaries) is passed down from page components through `StandardTopicPage` to the relevant display components

5. **User Interaction**:
   - `RiskFactorCard` manages its own expanded/collapsed state and tab selection
   - `LeftSidebar` and `TopNavBar` provide navigation links between different project views

### Key Data Interfaces

- **RiskFactor**: Core data structure representing individual risk elements with strengths, considerations, and recommended actions.
- **SubtopicData**: Groups related risk factors under a common theme.
- **SubTopic**: Navigation item structure used by the sidebar.

### Adding New Topics or Components

To add a new topic:

1. Create a new folder under `/app/project/[projectId]/` with the topic name
2. Add a `page.tsx` file that uses `StandardTopicPage`
3. Update `subtopicData.ts` to include navigation items for the new topic
4. Add relevant risk factor data for the new topic
