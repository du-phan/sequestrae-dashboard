import { RiskFactor } from "./RiskFactorCard";

// Interface for summary items
interface SummaryItem {
  id: string;
  text: string;
}

// Interface for subtopic data structure
interface SubtopicData {
  id: string;
  title: string;
  summary: string;
  riskFactors: RiskFactor[];
}

// Interface for topic data
interface TopicData {
  title: string;
  description: string;
  summaryData: {
    strengths?: SummaryItem[];
    considerations?: SummaryItem[];
    recommendedActions?: SummaryItem[];
  };
  subtopics: SubtopicData[];
  summaryTitle?: string;
}

// Sample subtopics for each main navigation topic
// This can be replaced with actual data from your API or database

interface SubTopic {
  id: string;
  name: string;
  href: string;
}

// Map of topic slugs to their respective subtopics
const subtopicsMap: Record<string, SubTopic[]> = {
  // Overview subtopics
  overview: [
    {
      id: "project-summary",
      name: "Project Summary",
      href: "#project-summary",
    },
    { id: "key-metrics", name: "Key Metrics", href: "#key-metrics" },
    { id: "timeline", name: "Timeline", href: "#timeline" },
    { id: "stakeholders", name: "Stakeholders", href: "#stakeholders" },
  ],

  // Carbon Accounting & Integrity subtopics
  integrity: [
    { id: "additionality", name: "Additionality", href: "#additionality" },
    {
      id: "baseline-setting",
      name: "Baseline Setting",
      href: "#baseline-setting",
    },
    {
      id: "crediting-accuracy",
      name: "Crediting Accuracy",
      href: "#crediting-accuracy",
    },
    { id: "permanence", name: "Permanence", href: "#permanence" },
    { id: "leakage", name: "Leakage", href: "#leakage" },
    {
      id: "verification",
      name: "Verification & Validation",
      href: "#verification",
    },
  ],

  // Delivery Risk subtopics
  delivery: [
    {
      id: "operational-risks",
      name: "Operational Risks",
      href: "#operational-risks",
    },
    {
      id: "financial-viability",
      name: "Financial Viability",
      href: "#financial-viability",
    },
    {
      id: "implementation-timeline",
      name: "Implementation Timeline",
      href: "#implementation-timeline",
    },
    {
      id: "regulatory-compliance",
      name: "Regulatory Compliance",
      href: "#regulatory-compliance",
    },
  ],

  // Environmental Factor subtopics
  environment: [
    { id: "biodiversity", name: "Biodiversity Impact", href: "#biodiversity" },
    {
      id: "water-resources",
      name: "Water Resources",
      href: "#water-resources",
    },
    { id: "soil-health", name: "Soil Health", href: "#soil-health" },
    {
      id: "ecosystem-services",
      name: "Ecosystem Services",
      href: "#ecosystem-services",
    },
  ],

  // Policy subtopics
  policy: [
    {
      id: "regulatory-framework",
      name: "Regulatory Framework",
      href: "#regulatory-framework",
    },
    {
      id: "compliance-standards",
      name: "Compliance Standards",
      href: "#compliance-standards",
    },
    { id: "policy-risks", name: "Policy Risks", href: "#policy-risks" },
    {
      id: "government-support",
      name: "Government Support",
      href: "#government-support",
    },
  ],

  // Social Impact subtopics
  social: [
    {
      id: "community-engagement",
      name: "Community Engagement",
      href: "#community-engagement",
    },
    {
      id: "indigenous-rights",
      name: "Indigenous Rights",
      href: "#indigenous-rights",
    },
    {
      id: "local-employment",
      name: "Local Employment",
      href: "#local-employment",
    },
    {
      id: "gender-equality",
      name: "Gender Equality",
      href: "#gender-equality",
    },
    { id: "health-safety", name: "Health & Safety", href: "#health-safety" },
  ],
};

/**
 * Get subtopics for sidebar navigation based on the current topic
 * @param topic Current topic identifier
 * @returns Array of subtopic navigation items
 */
export function getSubtopicsForTopic(
  topic: string
): { id: string; title: string }[] {
  // This is a mock implementation that would be replaced with actual data fetching
  // In a real app, this might fetch from an API or state management system
  const mockSubtopics: Record<string, { id: string; title: string }[]> = {
    overview: [
      { id: "summary", title: "Project Summary" },
      { id: "status", title: "Status" },
    ],
    security: [
      { id: "authentication", title: "Authentication" },
      { id: "authorization", title: "Authorization" },
      { id: "data-protection", title: "Data Protection" },
    ],
    performance: [
      { id: "frontend", title: "Frontend Performance" },
      { id: "backend", title: "Backend Performance" },
      { id: "database", title: "Database Performance" },
    ],
    // Add more topics as needed
  };

  return mockSubtopics[topic] || [];
}

/**
 * Get detailed topic data including title, description, and subtopics
 * @param topic Current topic identifier
 * @returns TopicData object with all required information
 */
export function getTopicData(topic: string): TopicData {
  // This is a mock implementation that would be replaced with actual data fetching
  // In a real app, this might fetch from an API
  const mockTopicData: Record<string, TopicData> = {
    overview: {
      title: "Project Overview",
      description:
        "A high-level summary of the project status and key metrics.",
      summaryData: {
        strengths: [
          { id: "s1", text: "Strong architectural foundation" },
          { id: "s2", text: "Comprehensive test coverage" },
        ],
        considerations: [
          { id: "c1", text: "Integration timeline may impact delivery" },
          { id: "c2", text: "Resource allocation needs review" },
        ],
        recommendedActions: [
          { id: "a1", text: "Schedule architecture review meeting" },
          { id: "a2", text: "Update project documentation" },
        ],
      },
      subtopics: [
        {
          id: "summary",
          title: "Project Summary",
          summary: "Key project metrics and status overview.",
          riskFactors: [
            {
              id: "r1",
              title: "Schedule Risk",
              main_idea: "Timeline constraints may impact delivery.",
              explanation:
                "The project timeline has several critical dependencies that could affect delivery dates.",
              strengths: [
                { id: "s1", text: "Well-defined milestones" },
                { id: "s2", text: "Regular progress tracking" },
              ],
              considerations: [
                { id: "c1", text: "External dependencies may cause delays" },
                { id: "c2", text: "Limited buffer in timeline" },
              ],
              recommended_actions: [
                {
                  id: "a1",
                  text: "Create contingency plans for critical paths",
                },
                { id: "a2", text: "Implement weekly checkpoint meetings" },
              ],
            },
            {
              id: "r2",
              title: "Resource Risk",
              main_idea: "Team capacity is adequate but monitoring needed.",
              explanation:
                "Current resource allocation meets project needs, but requires close monitoring as project complexity increases.",
              strengths: [
                { id: "s1", text: "Experienced team members" },
                { id: "s2", text: "Cross-functional capabilities" },
              ],
              considerations: [
                { id: "c1", text: "Potential skill gaps in specialized areas" },
                { id: "c2", text: "Competing priorities across teams" },
              ],
              recommended_actions: [
                { id: "a1", text: "Conduct skill gap analysis" },
                { id: "a2", text: "Develop resource scaling plan" },
              ],
            },
          ],
        },
        {
          id: "status",
          title: "Project Status",
          summary: "Current project status and progress tracking.",
          riskFactors: [
            {
              id: "r3",
              title: "Dependency Risk",
              main_idea: "External dependencies may cause delays.",
              explanation:
                "The project relies on several external dependencies that could impact timeline and deliverables.",
              strengths: [
                { id: "s1", text: "Clear dependency documentation" },
                { id: "s2", text: "Alternative solutions identified" },
              ],
              considerations: [
                { id: "c1", text: "Limited control over external timelines" },
                { id: "c2", text: "Integration complexity" },
              ],
              recommended_actions: [
                {
                  id: "a1",
                  text: "Establish regular check-ins with external teams",
                },
                {
                  id: "a2",
                  text: "Develop fallback options for critical dependencies",
                },
              ],
            },
          ],
        },
      ],
    },
    security: {
      title: "Security Assessment",
      description:
        "Comprehensive security analysis of the project components and infrastructure.",
      summaryData: {
        strengths: [
          { id: "s1", text: "Strong authentication mechanisms" },
          { id: "s2", text: "Regular security audits in place" },
        ],
        considerations: [
          { id: "c1", text: "Third-party integration security needs review" },
          { id: "c2", text: "Data encryption in transit improvements needed" },
        ],
        recommendedActions: [
          { id: "a1", text: "Implement additional API security measures" },
          { id: "a2", text: "Schedule penetration testing" },
        ],
      },
      subtopics: [
        {
          id: "authentication",
          title: "Authentication",
          summary: "Assessment of user authentication mechanisms.",
          riskFactors: [
            {
              id: "r1",
              title: "Brute Force Risk",
              main_idea:
                "Rate limiting is implemented but could be strengthened.",
              explanation:
                "Current rate limiting provides basic protection, but advanced brute force attacks might still be possible.",
              strengths: [
                { id: "s1", text: "Basic rate limiting implemented" },
                { id: "s2", text: "Account lockout after failed attempts" },
              ],
              considerations: [
                {
                  id: "c1",
                  text: "Distributed attacks may bypass rate limits",
                },
                {
                  id: "c2",
                  text: "User experience during legitimate failures",
                },
              ],
              recommended_actions: [
                {
                  id: "a1",
                  text: "Implement progressive delays between attempts",
                },
                { id: "a2", text: "Add IP-based rate limiting" },
              ],
            },
            {
              id: "r2",
              title: "Session Management",
              main_idea: "Session timeout settings need review.",
              explanation:
                "Current session management practices may leave room for session hijacking or unauthorized access.",
              strengths: [
                { id: "s1", text: "Sessions invalidated on logout" },
                { id: "s2", text: "HTTPS used for all communications" },
              ],
              considerations: [
                { id: "c1", text: "Long session timeouts increase risk" },
                { id: "c2", text: "Session rotation not implemented" },
              ],
              recommended_actions: [
                { id: "a1", text: "Reduce session timeout period" },
                {
                  id: "a2",
                  text: "Implement session rotation for extended sessions",
                },
              ],
            },
          ],
        },
        {
          id: "authorization",
          title: "Authorization",
          summary: "Evaluation of access control systems.",
          riskFactors: [
            {
              id: "r3",
              title: "Role Definition",
              main_idea: "Role boundaries need clearer definition.",
              explanation:
                "Current role-based access control lacks granularity and clear boundaries between roles.",
              strengths: [
                { id: "s1", text: "Basic role system implemented" },
                { id: "s2", text: "Admin actions properly restricted" },
              ],
              considerations: [
                { id: "c1", text: "Role overlap creates confusion" },
                {
                  id: "c2",
                  text: "Principle of least privilege not fully enforced",
                },
              ],
              recommended_actions: [
                { id: "a1", text: "Review and redefine role boundaries" },
                { id: "a2", text: "Implement permission auditing" },
              ],
            },
            {
              id: "r4",
              title: "Permission Granularity",
              main_idea: "Permissions are too coarse-grained.",
              explanation:
                "The current permission system lacks the granularity needed for proper access control.",
              strengths: [
                { id: "s1", text: "Core permissions work as expected" },
                { id: "s2", text: "Critical areas are protected" },
              ],
              considerations: [
                { id: "c1", text: "All-or-nothing permissions in many areas" },
                { id: "c2", text: "Limited delegation capabilities" },
              ],
              recommended_actions: [
                { id: "a1", text: "Implement resource-level permissions" },
                { id: "a2", text: "Add attribute-based access control" },
              ],
            },
          ],
        },
      ],
      summaryTitle: "Security Overview",
    },
    delivery: {
      title: "Delivery Risk",
      description:
        "This section evaluates the operational, financial, and regulatory risks that could affect project implementation and carbon credit delivery.",
      summaryData: {
        strengths: [
          {
            id: "s1",
            text: "Strong operational risk management protocols in place",
          },
          {
            id: "s2",
            text: "Diversified revenue streams reduce financial exposure",
          },
        ],
        considerations: [
          {
            id: "c1",
            text: "Market volatility presents ongoing challenges for pricing stability",
          },
        ],
        recommendedActions: [
          { id: "a1", text: "Implement quarterly compliance review process" },
          {
            id: "a2",
            text: "Develop contingency plans for key operational risks",
          },
        ],
      },
      subtopics: [
        {
          id: "operational-risks",
          title: "Operational Risks",
          summary:
            "Analysis of the project's operational challenges including implementation difficulties.",
          riskFactors: [
            {
              id: "op-risk-1",
              title: "Project Implementation Challenges",
              main_idea:
                "The project faces moderate implementation challenges related to technical complexity.",
              explanation:
                "Implementation requires specialized expertise and equipment with technological challenges.",
              strengths: [
                {
                  id: "ops-s1",
                  text: "Team includes technical experts with relevant experience",
                },
                {
                  id: "ops-s2",
                  text: "Pilot phase successfully demonstrated core technologies",
                },
              ],
              considerations: [
                {
                  id: "ops-c1",
                  text: "Limited availability of specialized equipment in the region",
                },
                {
                  id: "ops-c2",
                  text: "Technical training needs for field staff",
                },
              ],
              recommended_actions: [
                {
                  id: "ops-a1",
                  text: "Secure equipment procurement contracts early",
                },
                {
                  id: "ops-a2",
                  text: "Develop comprehensive staff training program",
                },
              ],
            },
            {
              id: "op-risk-2",
              title: "Supply Chain Dependencies",
              main_idea:
                "Supply chain vulnerabilities may impact project timelines.",
              explanation:
                "The project relies on several key components with limited suppliers, creating potential bottlenecks in the implementation timeline.",
              strengths: [
                {
                  id: "ops-s3",
                  text: "Alternative suppliers identified for most components",
                },
                {
                  id: "ops-s4",
                  text: "Buffer stock strategy implemented for critical items",
                },
              ],
              considerations: [
                {
                  id: "ops-c3",
                  text: "Global supply chain disruptions continue to affect lead times",
                },
                {
                  id: "ops-c4",
                  text: "Quality consistency varies between suppliers",
                },
              ],
              recommended_actions: [
                {
                  id: "ops-a3",
                  text: "Establish contracts with multiple suppliers for critical components",
                },
                {
                  id: "ops-a4",
                  text: "Develop quality control protocols for all incoming materials",
                },
              ],
            },
          ],
        },
        {
          id: "financial-viability",
          title: "Financial Viability",
          summary:
            "Assessment of the project's financial sustainability and cost management.",
          riskFactors: [
            {
              id: "fin-risk-1",
              title: "Operating Cost Management",
              main_idea:
                "Project operating costs are well-structured but face inflation pressures.",
              explanation:
                "The project has established operating cost projections based on pilot phase data. While the basic structure is sound, regional inflation rates are currently higher than anticipated in initial projections, potentially affecting long-term financial sustainability.",
              strengths: [
                {
                  id: "fin-s1",
                  text: "Detailed cost tracking system implemented",
                },
                {
                  id: "fin-s2",
                  text: "Cost contingency buffer included in financial model",
                },
              ],
              considerations: [
                { id: "fin-c1", text: "Inflation rates exceed 7% annually" },
                {
                  id: "fin-c2",
                  text: "Energy costs showing significant volatility",
                },
              ],
              recommended_actions: [
                {
                  id: "fin-a1",
                  text: "Implement quarterly cost review process",
                },
                {
                  id: "fin-a2",
                  text: "Explore renewable energy options to mitigate energy cost risks",
                },
              ],
            },
            {
              id: "fin-risk-2",
              title: "Revenue Stream Stability",
              main_idea:
                "Multiple revenue streams provide stability but carbon price volatility poses risks.",
              explanation:
                "The project has successfully diversified revenue beyond carbon credits, including ecosystem services payments and sustainable product sales. However, carbon market price volatility remains a significant factor in financial projections.",
              strengths: [
                {
                  id: "fin-s3",
                  text: "Multiple revenue streams reduce dependency on carbon markets",
                },
                {
                  id: "fin-s4",
                  text: "Long-term offtake agreements secure minimum revenue floor",
                },
              ],
              considerations: [
                {
                  id: "fin-c3",
                  text: "Carbon price volatility affects 40% of projected revenue",
                },
                {
                  id: "fin-c4",
                  text: "Ecosystem service payment mechanisms still maturing",
                },
              ],
              recommended_actions: [
                {
                  id: "fin-a3",
                  text: "Explore forward contracts to lock in carbon prices",
                },
                {
                  id: "fin-a4",
                  text: "Develop scenario-based financial models for different market conditions",
                },
              ],
            },
          ],
        },
        {
          id: "implementation-timeline",
          title: "Implementation Timeline",
          summary:
            "Evaluation of the project timeline and milestone feasibility.",
          riskFactors: [
            {
              id: "time-risk-1",
              title: "Critical Path Management",
              main_idea: "Timeline has limited buffer for key milestones.",
              explanation:
                "The project implementation timeline includes several interdependent activities with limited flexibility. Delays in critical path activities could cascade throughout the project schedule.",
              strengths: [
                {
                  id: "time-s1",
                  text: "Detailed Gantt chart with dependencies clearly mapped",
                },
                {
                  id: "time-s2",
                  text: "Weekly progress tracking against milestones",
                },
              ],
              considerations: [
                {
                  id: "time-c1",
                  text: "Regulatory approvals on critical path with uncertain timelines",
                },
                {
                  id: "time-c2",
                  text: "Weather-dependent activities during rainy season",
                },
              ],
              recommended_actions: [
                {
                  id: "time-a1",
                  text: "Develop specific contingency plans for high-risk timeline segments",
                },
                {
                  id: "time-a2",
                  text: "Engage regulatory authorities early and maintain regular communication",
                },
              ],
            },
          ],
        },
        {
          id: "regulatory-compliance",
          title: "Regulatory Compliance",
          summary: "Analysis of regulatory requirements and compliance risks.",
          riskFactors: [
            {
              id: "reg-risk-1",
              title: "Evolving Regulatory Framework",
              main_idea:
                "Changing carbon market regulations may impact project requirements.",
              explanation:
                "The regulatory framework for carbon projects is evolving in the project region, with potential new requirements expected within the next 2-3 years.",
              strengths: [
                {
                  id: "reg-s1",
                  text: "Project designed to exceed current regulatory requirements",
                },
                {
                  id: "reg-s2",
                  text: "Active engagement with regulatory bodies",
                },
              ],
              considerations: [
                {
                  id: "reg-c1",
                  text: "Draft regulations indicate more stringent MRV requirements",
                },
                {
                  id: "reg-c2",
                  text: "Unclear timeline for new regulation implementation",
                },
              ],
              recommended_actions: [
                {
                  id: "reg-a1",
                  text: "Participate in public consultation for new regulations",
                },
                {
                  id: "reg-a2",
                  text: "Develop adaptable MRV systems that can be upgraded",
                },
              ],
            },
          ],
        },
      ],
      summaryTitle: "Delivery Risk Summary",
    },
    environment: {
      title: "Environmental Factor",
      description:
        "Assessment of the project's impact on biodiversity, water resources, soil health, and ecosystem services.",
      summaryData: {
        strengths: [
          {
            id: "s1",
            text: "Positive biodiversity impact with 23% increase in native species",
          },
          {
            id: "s2",
            text: "Significant improvements in soil health and reduced erosion",
          },
          { id: "s3", text: "Enhanced water quality in local watersheds" },
        ],
        considerations: [
          { id: "c1", text: "Ongoing management needed for invasive species" },
          {
            id: "c2",
            text: "Seasonal drought periods require continuous monitoring",
          },
        ],
        recommendedActions: [
          { id: "a1", text: "Implement quarterly biodiversity surveys" },
          {
            id: "a2",
            text: "Enhance watershed protection through buffer zone expansion",
          },
          { id: "a3", text: "Continue soil carbon monitoring program" },
        ],
      },
      subtopics: [
        {
          id: "biodiversity",
          title: "Biodiversity Impact",
          summary:
            "Analysis of the project's effects on local flora, fauna, and habitat quality.",
          riskFactors: [
            {
              id: "bio-risk-1",
              title: "Native Species Recovery",
              main_idea:
                "Project activities are supporting recovery of native species populations.",
              explanation:
                "Monitoring indicates that native plant and animal species are increasing in population and distribution across the project area. Key indicator species show strong positive trends.",
              strengths: [
                {
                  id: "bio-s1",
                  text: "Population of key indicator species increased by 23%",
                },
                {
                  id: "bio-s2",
                  text: "Habitat diversity improved through targeted restoration",
                },
                {
                  id: "bio-s3",
                  text: "Wildlife corridors successfully established",
                },
              ],
              considerations: [
                {
                  id: "bio-c1",
                  text: "Invasive species management needs ongoing attention",
                },
                {
                  id: "bio-c2",
                  text: "Seasonal variations affect monitoring accuracy",
                },
              ],
              recommended_actions: [
                {
                  id: "bio-a1",
                  text: "Implement quarterly biodiversity surveys",
                },
                {
                  id: "bio-a2",
                  text: "Expand invasive species management program",
                },
                {
                  id: "bio-a3",
                  text: "Develop long-term monitoring protocol for rare species",
                },
              ],
            },
            {
              id: "bio-risk-2",
              title: "Habitat Fragmentation",
              main_idea:
                "Project design minimizes habitat fragmentation and enhances connectivity.",
              explanation:
                "The project layout and implementation strategies were designed to minimize habitat fragmentation and maintain ecological connectivity across the landscape.",
              strengths: [
                {
                  id: "bio-s4",
                  text: "Strategic wildlife corridors connect habitat fragments",
                },
                {
                  id: "bio-s5",
                  text: "Buffer zones established around sensitive habitats",
                },
              ],
              considerations: [
                {
                  id: "bio-c3",
                  text: "Neighboring land use changes could affect connectivity",
                },
                {
                  id: "bio-c4",
                  text: "Infrastructure maintenance activities need careful scheduling",
                },
              ],
              recommended_actions: [
                {
                  id: "bio-a4",
                  text: "Engage with adjacent landowners on conservation strategies",
                },
                {
                  id: "bio-a5",
                  text: "Implement seasonal restrictions on maintenance activities",
                },
              ],
            },
          ],
        },
        {
          id: "water-resources",
          title: "Water Resources",
          summary:
            "Evaluation of water quality, watershed health, and hydrological impacts.",
          riskFactors: [
            {
              id: "water-risk-1",
              title: "Watershed Protection",
              main_idea:
                "Project activities enhance watershed health and water quality.",
              explanation:
                "Riparian restoration and improved land management practices have resulted in measurable improvements to local watershed health and water quality metrics.",
              strengths: [
                {
                  id: "water-s1",
                  text: "Water quality indicators show 15% improvement downstream",
                },
                {
                  id: "water-s2",
                  text: "Reduced sediment load in waterways by 67%",
                },
                {
                  id: "water-s3",
                  text: "Riparian buffer zones established along 85% of waterways",
                },
              ],
              considerations: [
                {
                  id: "water-c1",
                  text: "Seasonal rainfall variations affect water flow",
                },
                {
                  id: "water-c2",
                  text: "Upstream activities outside project control may impact water quality",
                },
              ],
              recommended_actions: [
                {
                  id: "water-a1",
                  text: "Continue water quality monitoring at established stations",
                },
                {
                  id: "water-a2",
                  text: "Expand riparian buffer zones in vulnerable areas",
                },
                {
                  id: "water-a3",
                  text: "Engage with upstream landowners on watershed protection",
                },
              ],
            },
            {
              id: "water-risk-2",
              title: "Water Availability",
              main_idea:
                "Project enhances water retention and groundwater recharge.",
              explanation:
                "Land management practices implemented by the project have improved water retention in the landscape and enhanced groundwater recharge rates.",
              strengths: [
                {
                  id: "water-s4",
                  text: "Improved soil infiltration rates across 75% of project area",
                },
                {
                  id: "water-s5",
                  text: "Seasonal springs showing increased flow duration",
                },
              ],
              considerations: [
                {
                  id: "water-c3",
                  text: "Climate change projections indicate potential drought increases",
                },
                {
                  id: "water-c4",
                  text: "Groundwater monitoring network has limited coverage",
                },
              ],
              recommended_actions: [
                {
                  id: "water-a4",
                  text: "Implement additional water retention features",
                },
                {
                  id: "water-a5",
                  text: "Expand groundwater monitoring network",
                },
              ],
            },
          ],
        },
        {
          id: "soil-health",
          title: "Soil Health",
          summary:
            "Analysis of soil quality, erosion control, and carbon sequestration in soils.",
          riskFactors: [
            {
              id: "soil-risk-1",
              title: "Soil Carbon Sequestration",
              main_idea:
                "Project activities are increasing soil carbon content.",
              explanation:
                "Management practices implemented by the project are leading to measurable increases in soil organic carbon, enhancing both sequestration and soil fertility.",
              strengths: [
                {
                  id: "soil-s1",
                  text: "Soil organic carbon increased by 18% from baseline",
                },
                {
                  id: "soil-s2",
                  text: "Improved soil structure visible in 85% of test plots",
                },
                {
                  id: "soil-s3",
                  text: "Microbial activity shows positive trends",
                },
              ],
              considerations: [
                {
                  id: "soil-c1",
                  text: "Carbon saturation potential varies across project area",
                },
                {
                  id: "soil-c2",
                  text: "Long-term permanence requires ongoing management",
                },
              ],
              recommended_actions: [
                {
                  id: "soil-a1",
                  text: "Continue soil carbon monitoring program",
                },
                {
                  id: "soil-a2",
                  text: "Adapt management practices based on soil type",
                },
              ],
            },
            {
              id: "soil-risk-2",
              title: "Erosion Control",
              main_idea:
                "Significant reduction in soil erosion across project area.",
              explanation:
                "Vegetative cover improvements and conservation practices have substantially reduced soil erosion rates across the project landscape.",
              strengths: [
                {
                  id: "soil-s4",
                  text: "Erosion rates reduced by 67% compared to baseline",
                },
                {
                  id: "soil-s5",
                  text: "Gully erosion areas successfully stabilized",
                },
              ],
              considerations: [
                {
                  id: "soil-c3",
                  text: "High-intensity rainfall events still cause localized erosion",
                },
                {
                  id: "soil-c4",
                  text: "Some steep slopes require additional intervention",
                },
              ],
              recommended_actions: [
                {
                  id: "soil-a3",
                  text: "Implement additional erosion control structures on steep slopes",
                },
                {
                  id: "soil-a4",
                  text: "Increase vegetative cover in vulnerable areas",
                },
              ],
            },
          ],
        },
        {
          id: "ecosystem-services",
          title: "Ecosystem Services",
          summary:
            "Evaluation of broader ecosystem services provided by the project.",
          riskFactors: [
            {
              id: "eco-risk-1",
              title: "Pollinator Support",
              main_idea:
                "Project enhances habitat for pollinators and beneficial insects.",
              explanation:
                "Habitat enhancements and flowering plant diversity have created improved conditions for pollinators and beneficial insects.",
              strengths: [
                {
                  id: "eco-s1",
                  text: "Pollinator diversity increased by 35% in monitored areas",
                },
                {
                  id: "eco-s2",
                  text: "Flowering plant diversity expanded through targeted planting",
                },
              ],
              considerations: [
                {
                  id: "eco-c1",
                  text: "Pesticide use in surrounding areas may affect pollinator populations",
                },
                {
                  id: "eco-c2",
                  text: "Seasonal availability of flowering resources needs enhancement",
                },
              ],
              recommended_actions: [
                {
                  id: "eco-a1",
                  text: "Create additional pollinator habitat corridors",
                },
                {
                  id: "eco-a2",
                  text: "Implement seasonal planting to extend flowering periods",
                },
              ],
            },
            {
              id: "eco-risk-2",
              title: "Climate Resilience",
              main_idea:
                "Project enhances ecosystem resilience to climate changes.",
              explanation:
                "The diversity of species and landscape features established by the project contribute to increased ecosystem resilience against climate change impacts.",
              strengths: [
                {
                  id: "eco-s3",
                  text: "Increased biodiversity enhances adaptive capacity",
                },
                {
                  id: "eco-s4",
                  text: "Water retention features reduce drought impact",
                },
              ],
              considerations: [
                {
                  id: "eco-c3",
                  text: "Extreme weather events may still cause temporary disruption",
                },
                {
                  id: "eco-c4",
                  text: "Long-term climate projections include scenarios beyond current planning",
                },
              ],
              recommended_actions: [
                {
                  id: "eco-a3",
                  text: "Develop specific climate resilience monitoring metrics",
                },
                {
                  id: "eco-a4",
                  text: "Update management plans to account for climate projection scenarios",
                },
              ],
            },
          ],
        },
      ],
      summaryTitle: "Environmental Assessment Overview",
    },
    integrity: {
      title: "Carbon Accounting & Integrity",
      description:
        "Comprehensive analysis of the project's carbon accounting framework, including additionality, baseline methodology, emissions calculations, permanence, and verification processes.",
      summaryData: {
        strengths: [
          {
            id: "i-s1",
            text: "Strong additionality case with clear financial barriers",
          },
          {
            id: "i-s2",
            text: "VCS-approved methodology with conservative calculations",
          },
          {
            id: "i-s3",
            text: "Independent third-party verification completed",
          },
        ],
        considerations: [
          {
            id: "i-c1",
            text: "Baseline monitoring needs more frequent updates",
          },
          {
            id: "i-c2",
            text: "Moderate leakage risk requires ongoing monitoring",
          },
        ],
        recommendedActions: [
          {
            id: "i-a1",
            text: "Implement enhanced permanence risk monitoring system",
          },
          {
            id: "i-a2",
            text: "Increase buffer pool contribution to address permanence risk",
          },
          {
            id: "i-a3",
            text: "Strengthen leakage monitoring in surrounding areas",
          },
        ],
      },
      subtopics: [
        {
          id: "additionality",
          title: "Additionality",
          summary:
            "Analysis of whether the project activities would have occurred in the absence of carbon credit incentives.",
          riskFactors: [
            {
              id: "add-r1",
              title: "Financial Additionality",
              main_idea:
                "Project demonstrates strong financial additionality with clear barriers to implementation.",
              explanation:
                "Financial analysis demonstrates that without carbon credit revenue, the project would not meet minimum financial return requirements for investors. Internal rate of return rises from 3% to 11% with carbon financing.",
              strengths: [
                { id: "add-s1", text: "Clear financial barrier documentation" },
                { id: "add-s2", text: "Conservative financial assumptions" },
                {
                  id: "add-s3",
                  text: "Third-party validation of financial models",
                },
              ],
              considerations: [
                {
                  id: "add-c1",
                  text: "Changing market conditions may affect baseline scenario",
                },
                {
                  id: "add-c2",
                  text: "Policy environment evolution could impact additionality in the long term",
                },
              ],
              recommended_actions: [
                {
                  id: "add-a1",
                  text: "Document policy and financial landscape annually",
                },
                {
                  id: "add-a2",
                  text: "Review financial assumptions with each verification",
                },
              ],
            },
            {
              id: "add-r2",
              title: "Regulatory Additionality",
              main_idea:
                "Project activities exceed regulatory requirements and are not mandated by law.",
              explanation:
                "Analysis of local, regional and national regulations confirms that the project activities are not legally required and exceed any regulatory mandates for land management or emissions reductions.",
              strengths: [
                {
                  id: "add-s4",
                  text: "Comprehensive regulatory analysis completed",
                },
                {
                  id: "add-s5",
                  text: "Legal opinion obtained confirming voluntary nature",
                },
              ],
              considerations: [
                {
                  id: "add-c3",
                  text: "Emerging regulations in the sector could change status in future years",
                },
              ],
              recommended_actions: [
                {
                  id: "add-a3",
                  text: "Establish regulatory monitoring system",
                },
                {
                  id: "add-a4",
                  text: "Annual regulatory compliance assessment",
                },
              ],
            },
          ],
        },
        {
          id: "baseline-setting",
          title: "Baseline Setting",
          summary:
            "Evaluation of the baseline scenario and methodology used for emissions calculations.",
          riskFactors: [
            {
              id: "base-r1",
              title: "Baseline Methodology",
              main_idea:
                "VCS-approved methodology applied with conservative assumptions.",
              explanation:
                "The project uses VCS methodology VM0015 for avoided deforestation with conservative inputs based on historical data and regional trends. The baseline is well-documented with GIS analysis and historical deforestation rates.",
              strengths: [
                {
                  id: "base-s1",
                  text: "VCS-approved methodology with proven track record",
                },
                {
                  id: "base-s2",
                  text: "10-year historical reference period data",
                },
                {
                  id: "base-s3",
                  text: "Peer-reviewed regional deforestation studies incorporated",
                },
              ],
              considerations: [
                {
                  id: "base-c1",
                  text: "Reference region selection needs stronger justification",
                },
                {
                  id: "base-c2",
                  text: "Baseline projections need more frequent updates",
                },
              ],
              recommended_actions: [
                {
                  id: "base-a1",
                  text: "Conduct sensitivity analysis on baseline parameters",
                },
                {
                  id: "base-a2",
                  text: "Update deforestation analysis with latest satellite imagery",
                },
              ],
            },
          ],
        },
        {
          id: "crediting-accuracy",
          title: "Crediting Accuracy",
          summary:
            "Assessment of measurement precision and accuracy of carbon credit calculations.",
          riskFactors: [
            {
              id: "cred-r1",
              title: "Measurement Accuracy",
              main_idea:
                "Carbon stock measurements use industry best practices with acceptable error margins.",
              explanation:
                "The project employs stratified sampling methods with permanent plots for above-ground biomass measurement, following IPCC Good Practice Guidance. Overall precision is estimated at +/- 8%, within acceptable ranges for tropical forest projects.",
              strengths: [
                {
                  id: "cred-s1",
                  text: "Stratified sampling design with statistical rigor",
                },
                {
                  id: "cred-s2",
                  text: "Permanent plot network established and geo-referenced",
                },
                {
                  id: "cred-s3",
                  text: "Field team with extensive measurement training",
                },
              ],
              considerations: [
                {
                  id: "cred-c1",
                  text: "Below-ground biomass uses default factors rather than direct measurement",
                },
                {
                  id: "cred-c2",
                  text: "Limited soil carbon measurements to date",
                },
              ],
              recommended_actions: [
                {
                  id: "cred-a1",
                  text: "Increase sampling intensity in high-variability strata",
                },
                {
                  id: "cred-a2",
                  text: "Develop site-specific allometric equations",
                },
              ],
            },
            {
              id: "cred-r2",
              title: "Data Management",
              main_idea:
                "Robust data management system but needs better quality control procedures.",
              explanation:
                "The project has implemented a database system for carbon measurement data but has some gaps in data validation and quality control protocols that could affect crediting accuracy.",
              strengths: [
                {
                  id: "cred-s4",
                  text: "Centralized database with regular backups",
                },
                {
                  id: "cred-s5",
                  text: "Raw data preserved alongside analyzed results",
                },
              ],
              considerations: [
                { id: "cred-c3", text: "Limited automated validation checks" },
                { id: "cred-c4", text: "Manual data entry prone to errors" },
              ],
              recommended_actions: [
                {
                  id: "cred-a3",
                  text: "Implement automated data validation systems",
                },
                {
                  id: "cred-a4",
                  text: "Establish regular data auditing protocols",
                },
              ],
            },
          ],
        },
        {
          id: "permanence",
          title: "Permanence",
          summary:
            "Analysis of the durability of carbon sequestration and risk mitigation measures.",
          riskFactors: [
            {
              id: "perm-r1",
              title: "Natural Risk Factors",
              main_idea:
                "Moderate natural risks identified with appropriate mitigation measures.",
              explanation:
                "The project area faces moderate risk from wildfires and severe weather events. Risk assessment identified specific vulnerable areas and seasons, with mitigation measures implemented for each risk category.",
              strengths: [
                {
                  id: "perm-s1",
                  text: "Comprehensive natural risk assessment completed",
                },
                {
                  id: "perm-s2",
                  text: "Fire prevention infrastructure established",
                },
                {
                  id: "perm-s3",
                  text: "Species diversity enhances resilience to disease",
                },
              ],
              considerations: [
                {
                  id: "perm-c1",
                  text: "Climate change may increase frequency of extreme weather events",
                },
                {
                  id: "perm-c2",
                  text: "Fire prevention resources need ongoing maintenance",
                },
              ],
              recommended_actions: [
                {
                  id: "perm-a1",
                  text: "Update natural risk assessment with climate projections",
                },
                {
                  id: "perm-a2",
                  text: "Increase fire break maintenance frequency",
                },
              ],
            },
            {
              id: "perm-r2",
              title: "Social Risk Factors",
              main_idea:
                "Strong community engagement reduces social risks to permanence.",
              explanation:
                "The project has established benefit-sharing mechanisms and community engagement programs that create local stakeholder interest in long-term project success, reducing risks of encroachment or opposition.",
              strengths: [
                {
                  id: "perm-s4",
                  text: "Formalized benefit-sharing agreements with communities",
                },
                {
                  id: "perm-s5",
                  text: "Local employment prioritized in project activities",
                },
                {
                  id: "perm-s6",
                  text: "Community forest monitoring program established",
                },
              ],
              considerations: [
                {
                  id: "perm-c3",
                  text: "Changing community leadership may affect engagement",
                },
                {
                  id: "perm-c4",
                  text: "Benefit distribution needs more transparent tracking",
                },
              ],
              recommended_actions: [
                {
                  id: "perm-a3",
                  text: "Implement community feedback mechanism",
                },
                {
                  id: "perm-a4",
                  text: "Formalize community engagement in project governance",
                },
              ],
            },
          ],
        },
        {
          id: "leakage",
          title: "Leakage",
          summary:
            "Evaluation of displacement effects and accounting for emissions outside project boundaries.",
          riskFactors: [
            {
              id: "leak-r1",
              title: "Activity Displacement",
              main_idea:
                "Moderate risk of activity displacement with monitoring program in place.",
              explanation:
                "As the project restricts certain activities within the project area, there is risk of these activities shifting to surrounding forests. The project has implemented a leakage belt monitoring system to detect and quantify any displacement.",
              strengths: [
                {
                  id: "leak-s1",
                  text: "Leakage belt defined and regularly monitored",
                },
                {
                  id: "leak-s2",
                  text: "Alternative livelihoods program reduces displacement pressure",
                },
              ],
              considerations: [
                {
                  id: "leak-c1",
                  text: "Monitoring limited to 5km buffer zone may miss longer-distance leakage",
                },
                {
                  id: "leak-c2",
                  text: "Satellite monitoring frequency could be increased",
                },
              ],
              recommended_actions: [
                {
                  id: "leak-a1",
                  text: "Expand leakage monitoring radius to 10km",
                },
                {
                  id: "leak-a2",
                  text: "Implement quarterly satellite monitoring updates",
                },
              ],
            },
          ],
        },
        {
          id: "verification",
          title: "Verification & Validation",
          summary:
            "Details about third-party verification processes and validation status.",
          riskFactors: [
            {
              id: "ver-r1",
              title: "Verification Process",
              main_idea:
                "Project successfully completed independent verification with minor findings.",
              explanation:
                "The project underwent full verification by an accredited VCS verification body in April 2023. The process included extensive document review, field visits, and stakeholder interviews. Several minor non-conformities were identified and subsequently addressed.",
              strengths: [
                {
                  id: "ver-s1",
                  text: "Verification completed by accredited verification body",
                },
                {
                  id: "ver-s2",
                  text: "All verification findings addressed promptly",
                },
                {
                  id: "ver-s3",
                  text: "Stakeholder consultation well-documented",
                },
              ],
              considerations: [
                {
                  id: "ver-c1",
                  text: "Some monitoring procedures needed clarification",
                },
                {
                  id: "ver-c2",
                  text: "Field measurement team training records incomplete",
                },
              ],
              recommended_actions: [
                {
                  id: "ver-a1",
                  text: "Update monitoring procedures manual before next verification",
                },
                {
                  id: "ver-a2",
                  text: "Implement comprehensive training record system",
                },
              ],
            },
            {
              id: "ver-r2",
              title: "Validation Status",
              main_idea:
                "Project validated against VCS standard version 4.2 with no major findings.",
              explanation:
                "Initial project validation was completed in 2021 against VCS standard v4.2, with the project description, baseline, and additionality assessment all approved. The validation process involved document review and field visits.",
              strengths: [
                {
                  id: "ver-s4",
                  text: "Full validation achieved against latest standard version",
                },
                { id: "ver-s5", text: "No major non-conformities identified" },
              ],
              considerations: [
                {
                  id: "ver-c3",
                  text: "Minor revisions to additionality evidence requested",
                },
                {
                  id: "ver-c4",
                  text: "Standard requirements have updated since validation",
                },
              ],
              recommended_actions: [
                {
                  id: "ver-a3",
                  text: "Review new standard requirements for next verification",
                },
                {
                  id: "ver-a4",
                  text: "Strengthen documentation for sensitive additionality claims",
                },
              ],
            },
          ],
        },
      ],
      summaryTitle: "Carbon Integrity Assessment",
    },
    social: {
      title: "Social Impact Assessment",
      description:
        "Evaluation of the project's engagement with local communities, indigenous rights, employment opportunities, gender equality initiatives, and health & safety impacts.",
      summaryData: {
        strengths: [
          {
            id: "s1",
            text: "Strong community participation with 5 local villages actively involved",
          },
          {
            id: "s2",
            text: "78 new jobs created with 82% local employment rate",
          },
          {
            id: "s3",
            text: "Full compliance with UN Declaration on Rights of Indigenous Peoples",
          },
        ],
        considerations: [
          {
            id: "c1",
            text: "Gender equality targets currently at 45% vs 50% goal",
          },
          {
            id: "c2",
            text: "Clean water access at 65% of households vs 80% target",
          },
        ],
        recommendedActions: [
          {
            id: "a1",
            text: "Expand women-specific training and leadership programs",
          },
          {
            id: "a2",
            text: "Accelerate clean water access initiatives",
          },
          {
            id: "a3",
            text: "Implement community feedback mechanism to track satisfaction",
          },
        ],
      },
      subtopics: [
        {
          id: "community-engagement",
          title: "Community Engagement",
          summary:
            "Analysis of the project's engagement strategies with local communities and their effectiveness.",
          riskFactors: [
            {
              id: "comm-r1",
              title: "Stakeholder Consultation",
              main_idea:
                "Comprehensive stakeholder consultation process with active community participation.",
              explanation:
                "The project has implemented a structured stakeholder consultation process that began during project design and continues throughout implementation. Regular community meetings and participatory decision-making mechanisms ensure ongoing engagement.",
              strengths: [
                {
                  id: "comm-s1",
                  text: "Consultation began in early project design phase",
                },
                {
                  id: "comm-s2",
                  text: "Regular community meetings with documented attendance and outcomes",
                },
                {
                  id: "comm-s3",
                  text: "Multiple communication channels accessible to all community groups",
                },
              ],
              considerations: [
                {
                  id: "comm-c1",
                  text: "Engagement with more remote communities has been challenging",
                },
                {
                  id: "comm-c2",
                  text: "Documentation of informal consultations needs improvement",
                },
              ],
              recommended_actions: [
                {
                  id: "comm-a1",
                  text: "Develop outreach strategy for remote communities",
                },
                {
                  id: "comm-a2",
                  text: "Implement standardized documentation system for all community interactions",
                },
              ],
            },
            {
              id: "comm-r2",
              title: "Benefit Sharing",
              main_idea:
                "Clear benefit sharing mechanism with transparent distribution process.",
              explanation:
                "The project has established a formal benefit sharing mechanism that distributes carbon revenues and other project benefits to communities based on an agreed formula. The process includes community representatives in decision-making and has transparent reporting.",
              strengths: [
                {
                  id: "comm-s4",
                  text: "Formal benefit sharing agreement signed with communities",
                },
                {
                  id: "comm-s5",
                  text: "Community representatives participate in benefit allocation decisions",
                },
                {
                  id: "comm-s6",
                  text: "Annual public reporting of benefit distribution",
                },
              ],
              considerations: [
                {
                  id: "comm-c3",
                  text: "Distribution within communities could be more equitable",
                },
                {
                  id: "comm-c4",
                  text: "Timing of benefit distribution sometimes delayed",
                },
              ],
              recommended_actions: [
                {
                  id: "comm-a3",
                  text: "Work with communities to improve intra-community distribution",
                },
                {
                  id: "comm-a4",
                  text: "Establish clear timeline for benefit distribution with accountability measures",
                },
              ],
            },
          ],
        },
        {
          id: "indigenous-rights",
          title: "Indigenous Rights",
          summary:
            "Assessment of how the project respects and upholds the rights of indigenous peoples.",
          riskFactors: [
            {
              id: "ind-r1",
              title: "Free, Prior and Informed Consent",
              main_idea:
                "FPIC process completed with all indigenous communities in the project area.",
              explanation:
                "The project has implemented a documented Free, Prior and Informed Consent (FPIC) process with all identified indigenous communities in the project area. The process followed international best practices and resulted in formal agreements.",
              strengths: [
                {
                  id: "ind-s1",
                  text: "FPIC process independently verified by third party",
                },
                {
                  id: "ind-s2",
                  text: "Agreements exist in both written and culturally appropriate formats",
                },
                {
                  id: "ind-s3",
                  text: "Community chosen representatives were involved in all discussions",
                },
              ],
              considerations: [
                {
                  id: "ind-c1",
                  text: "Some community members initially felt process was too technical",
                },
                {
                  id: "ind-c2",
                  text: "Follow-up communication on agreement implementation could be improved",
                },
              ],
              recommended_actions: [
                {
                  id: "ind-a1",
                  text: "Implement regular update meetings on agreement compliance",
                },
                {
                  id: "ind-a2",
                  text: "Develop simplified materials explaining technical aspects",
                },
              ],
            },
            {
              id: "ind-r2",
              title: "Cultural Heritage Protection",
              main_idea:
                "Measures in place to protect cultural sites and traditional knowledge.",
              explanation:
                "The project includes specific provisions to identify, protect and respect cultural heritage sites and traditional knowledge. This includes mapping of sacred sites and protocols for handling traditional knowledge.",
              strengths: [
                {
                  id: "ind-s4",
                  text: "Participatory mapping of cultural sites completed",
                },
                {
                  id: "ind-s5",
                  text: "Protocols for cultural site access developed with elders",
                },
                {
                  id: "ind-s6",
                  text: "Traditional knowledge incorporated into project design",
                },
              ],
              considerations: [
                {
                  id: "ind-c3",
                  text: "Some sites may require additional physical protection",
                },
                {
                  id: "ind-c4",
                  text: "Staff training on cultural protocols needs refreshing",
                },
              ],
              recommended_actions: [
                {
                  id: "ind-a3",
                  text: "Implement physical protection measures for vulnerable sites",
                },
                {
                  id: "ind-a4",
                  text: "Conduct regular cultural awareness training for all staff",
                },
              ],
            },
          ],
        },
        {
          id: "local-employment",
          title: "Local Employment",
          summary:
            "Analysis of job creation, employment opportunities, and economic benefits for local communities.",
          riskFactors: [
            {
              id: "emp-r1",
              title: "Job Creation",
              main_idea:
                "Significant local employment generated with targeted hiring practices.",
              explanation:
                "The project has created 78 new jobs with 82% filled by local community members. Employment includes both direct project implementation roles and related value chain activities.",
              strengths: [
                {
                  id: "emp-s1",
                  text: "Local hiring policy with transparent recruitment process",
                },
                {
                  id: "emp-s2",
                  text: "Skills training program to enhance local employment eligibility",
                },
                {
                  id: "emp-s3",
                  text: "Progressive advancement opportunities for local staff",
                },
              ],
              considerations: [
                {
                  id: "emp-c1",
                  text: "Specialized technical positions still filled by external hires",
                },
                {
                  id: "emp-c2",
                  text: "Seasonal employment fluctuation creates income instability",
                },
              ],
              recommended_actions: [
                {
                  id: "emp-a1",
                  text: "Develop advanced technical training for local staff",
                },
                {
                  id: "emp-a2",
                  text: "Create complementary activities to balance seasonal employment",
                },
              ],
            },
          ],
        },
        {
          id: "gender-equality",
          title: "Gender Equality",
          summary:
            "Evaluation of gender inclusion, women's empowerment, and equality initiatives.",
          riskFactors: [
            {
              id: "gen-r1",
              title: "Women's Participation",
              main_idea:
                "Progress toward gender targets but more action needed in leadership roles.",
              explanation:
                "Women currently represent 45% of project employees with 38% in leadership positions, showing progress toward but not yet meeting the project's 50% target. Specific programs have been established to address barriers to women's participation.",
              strengths: [
                {
                  id: "gen-s1",
                  text: "Gender action plan with specific targets and timeline",
                },
                {
                  id: "gen-s2",
                  text: "Three women-specific training programs actively running",
                },
                {
                  id: "gen-s3",
                  text: "Equal pay policy implemented and monitored",
                },
              ],
              considerations: [
                {
                  id: "gen-c1",
                  text: "Cultural barriers persist in certain technical roles",
                },
                {
                  id: "gen-c2",
                  text: "Women's participation in governance bodies needs improvement",
                },
              ],
              recommended_actions: [
                {
                  id: "gen-a1",
                  text: "Implement mentoring program for women in technical roles",
                },
                {
                  id: "gen-a2",
                  text: "Set specific targets for women's representation in governance",
                },
              ],
            },
          ],
        },
        {
          id: "health-safety",
          title: "Health & Safety",
          summary:
            "Assessment of project impacts on community health, safety, and general wellbeing.",
          riskFactors: [
            {
              id: "health-r1",
              title: "Water and Sanitation",
              main_idea:
                "Improved access to clean water but targets not yet met.",
              explanation:
                "The project has increased clean water access to 65% of households in the project area, a significant improvement from the 35% baseline but still short of the 80% target. Water quality testing shows consistent compliance with WHO standards.",
              strengths: [
                {
                  id: "health-s1",
                  text: "15 new water points established and functioning",
                },
                {
                  id: "health-s2",
                  text: "Water quality meets WHO standards at all testing points",
                },
                {
                  id: "health-s3",
                  text: "Community water committees trained in maintenance",
                },
              ],
              considerations: [
                {
                  id: "health-c1",
                  text: "Some remote households still have limited access",
                },
                {
                  id: "health-c2",
                  text: "Seasonal water availability fluctuations",
                },
              ],
              recommended_actions: [
                {
                  id: "health-a1",
                  text: "Accelerate clean water access initiatives for remote areas",
                },
                {
                  id: "health-a2",
                  text: "Implement water storage solutions for dry seasons",
                },
              ],
            },
            {
              id: "health-r2",
              title: "Air Quality Impact",
              main_idea:
                "Significant reduction in respiratory issues due to clean cooking initiatives.",
              explanation:
                "The project's clean cooking initiative has resulted in a 42% reduction in reported respiratory issues, primarily due to decreased indoor air pollution from traditional cooking methods.",
              strengths: [
                {
                  id: "health-s4",
                  text: "650 improved cookstoves distributed and in use",
                },
                {
                  id: "health-s5",
                  text: "42% reduction in respiratory issues according to health survey",
                },
                {
                  id: "health-s6",
                  text: "Local production of stoves creating additional employment",
                },
              ],
              considerations: [
                {
                  id: "health-c3",
                  text: "Some households using both traditional and improved methods",
                },
                {
                  id: "health-c4",
                  text: "Fuel supply for improved stoves sometimes inconsistent",
                },
              ],
              recommended_actions: [
                {
                  id: "health-a3",
                  text: "Conduct follow-up training on exclusive use benefits",
                },
                {
                  id: "health-a4",
                  text: "Develop sustainable fuel supply chain",
                },
              ],
            },
          ],
        },
      ],
      summaryTitle: "Social Impact Overview",
    },
    // Add more topics as needed
  };

  // Return default data if topic is not found
  return (
    mockTopicData[topic] || {
      title: "Topic Information",
      description: "Information about this topic is not available.",
      summaryData: {},
      subtopics: [],
    }
  );
}

export default subtopicsMap;
