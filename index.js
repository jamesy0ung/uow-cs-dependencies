import cytoscape from 'cytoscape';
import dagre from 'cytoscape-dagre';
import navigator from 'cytoscape-navigator';
import 'cytoscape-navigator/cytoscape.js-navigator.css';
// Import stylesheets
import './style.css';

cytoscape.use(dagre);
navigator(cytoscape);

const cy = cytoscape({
  container: document.getElementById('cy'),
  style: [
    {
      selector: 'node',
      style: {
        'background-color': 'white',
        'border-color': '#333',
        'border-width': 2,
        'label': 'data(label)',
        'text-valign': 'center',
        'text-halign': 'center',
        'shape': 'rectangle',
        'text-wrap': 'wrap',
        'text-max-width': '150px',
        'font-size': '12px'
      }
    },
    {
      selector: 'edge',
      style: {
        'width': 2,
        'line-color': '#333',
        'target-arrow-color': '#333',
        'target-arrow-shape': 'triangle',
        'curve-style': 'bezier'
      }
    },
    {
      selector: 'edge[style = "dashed"]',
      style: {
        'width': 2,
        'line-color': '#333',
        'line-style': 'dashed',
        'target-arrow-color': '#333',
        'target-arrow-shape': 'triangle',
        'curve-style': 'bezier'
      }
    },
    {
      selector: '.first',
      style: {
        'background-color': '#d4e6f7'
      }
    },
    {
      selector: '.second',
      style: {
        'background-color': '#ffd7b3'
      }
    },
    {
      selector: '.third',
      style: {
        'background-color': '#d5e8d4'
      }
    },
    {
      selector: '.recommended',
      style: {
        'line-style': 'dashed'
      }
    },
    {
      selector: '.choice',
      style: {
        'background-color': 'white'
      }
    },

     // Generic Major Styling
    {
      selector: '.major',
      style: {
        'background-color': '#f0f0f0', // Default if not overridden
        'border-color': '#333',
        'border-width': 2,
        'text-valign': 'top',
        'text-halign': 'center',
        'font-weight': 'bold'
      }
    },

    //Color Overrides
    {
      selector: '.ai, .ai-major',
       style: {
        'background-color': '#e6ccff'
      }
    },
    {
       selector: '.cyber, .cyber-major',
       style: {
          'background-color': '#ffcccc'
        }
    },
    {
      selector: '.digital, .digital-major',
        style: {
          'background-color': '#ffe6cc'
        }
    },
    {
        selector: '.game, .game-major',
        style: {
          'background-color': '#ccffe6'
        }
    },
    {
      selector: '.software, .software-major',
       style: {
          'background-color': '#fff2cc'
        }
    },

    {
      selector: ':parent',
      style: {
        'background-opacity': 0.333,
        'text-valign': 'top'
      }
    }
    ,
    {
      selector: '.level-100',
      style: {
          'background-color': '#d4e6f7',
          'text-valign': 'top',
          'text-halign': 'center',
          'font-weight': 'bold'
      }
    },
    {
        selector: '.level-200',
        style: {
            'background-color': '#ffd7b3',
            'text-valign': 'top',
            'text-halign': 'center',
            'font-weight': 'bold'
        }
    },
    {
        selector: '.level-300',
        style: {
            'background-color': '#d5e8d4',
            'text-valign': 'top',
            'text-halign': 'center',
            'font-weight': 'bold'
        }
    }
  ],

  elements: [
    // Core First Year Courses - Autumn
      { data: { id: 'CSIT110', label: 'CSIT110\nFundamental Programming\nwith Python' }, classes: 'first' },
      { data: { id: 'CSIT114', label: 'CSIT114\nSystem Analysis' }, classes: 'first' },
      { data: { id: 'CSIT115', label: 'CSIT115\nData Management\nand Security' }, classes: 'first' },
      { data: { id: 'CSIT123', label: 'CSIT123\nComputing & Cyber\nSecurity Fund.' }, classes: 'first' },

      // Core First Year Courses - Spring
      { data: { id: 'CSIT121', label: 'CSIT121\nObject Oriented Design\n& Programming' }, classes: 'first' },
      { data: { id: 'CSIT127', label: 'CSIT127\nNetworks and\nCommunications' }, classes: 'first' },
      { data: { id: 'CSIT128', label: 'CSIT128\nIntroduction to\nWeb Technology' }, classes: 'first' },
      { data: { id: 'CSIT226', label: 'CSIT226\nHuman Computer\nInteraction' }, classes: 'first' },

      // Core Second Year Courses
      { data: { id: 'CSCI203', label: 'CSCI203\nAlgorithms and\nData Structures' }, classes: 'second' },
      { data: { id: 'CSCI235', label: 'CSCI235\nDatabase Systems' }, classes: 'second' },
      { data: { id: 'CSCI251', label: 'CSCI251\nAdvanced\nProgramming' }, classes: 'second' },
      { data: { id: 'CSIT205', label: 'CSIT205\nGenerative AI' }, classes: 'second' },
      { data: { id: 'CSIT214', label: 'CSIT214\nIT Project\nManagement' }, classes: 'second' },
      { data: { id: 'CSIT213', label: 'CSIT213\nJava\nProgramming' }, classes: 'second' },

      // Core Third Year Courses
      { data: { id: 'CSIT314', label: 'CSIT314\nSoftware Development\nMethodologies' }, classes: 'third' },
      { data: { id: 'CSIT321', label: 'CSIT321\nProject\n(12cp Annual)' }, classes: 'third' },

      // AI and Big Data Major
      { data: { id: 'MAJ44204', label: 'Artificial Intelligence and Big Data Major' }, classes: 'major ai-major' },
      { data: { id: 'CSCI218', label: 'CSCI218\nFoundations of AI' }, classes: 'ai', parent: 'MAJ44204' },
      { data: { id: 'CSCI323', label: 'CSCI323\nModern AI' }, classes: 'ai', parent: 'MAJ44204' },
      { data: { id: 'ISIT312', label: 'ISIT312\nBig Data Management' }, classes: 'ai', parent: 'MAJ44204' },
      { data: { id: 'CSCI316', label: 'CSCI316\nBig Data Mining' }, classes: 'ai', parent: 'MAJ44204' },

      // Cyber Security Major
      { data: { id: 'MAJ40516', label: 'Cyber Security Major' }, classes: 'major cyber-major' },
      { data: { id: 'CSCI262_1', label: 'CSCI262\nSystem Security' }, classes: 'cyber', parent: 'MAJ40516' },
      { data: { id: 'CSIT375', label: 'CSIT375\nAI and Cybersecurity' }, classes: 'cyber', parent: 'MAJ40516' },
      { data: { id: 'CSCI369', label: 'CSCI369\nEthical Hacking' }, classes: 'cyber', parent: 'MAJ40516' },
      { data: { id: 'CSIT302', label: 'CSIT302\nCybersecurity' }, classes: 'cyber', parent: 'MAJ40516' },

      // Digital Systems Security Major
      { data: { id: 'MAJ40164', label: 'Digital Systems Security Major' }, classes: 'major digital-major' },
      { data: { id: 'CSCI262_2', label: 'CSCI262\nSystem Security' }, classes: 'digital', parent: 'MAJ40164' },
      { data: { id: 'CSCI361', label: 'CSCI361\nCryptography' }, classes: 'digital', parent: 'MAJ40164' },
      { data: { id: 'CSCI368', label: 'CSCI368\nNetwork Security' }, classes: 'digital', parent: 'MAJ40164' },
      { data: { id: 'CSIT328', label: 'CSIT328\nWeb Security' }, classes: 'digital', parent: 'MAJ40164' },

      // Game and Mobile Development Major
      { data: { id: 'MAJ41477', label: 'Game and Mobile Development Major' }, classes: 'major game-major' },
      { data: { id: 'CSIT242', label: 'CSIT242\nMobile App Dev' }, classes: 'game', parent: 'MAJ41477' },
      { data: { id: 'CSCI336', label: 'CSCI336\nInteractive Graphics' }, classes: 'game', parent: 'MAJ41477' },
      { data: { id: 'CSCI356', label: 'CSCI356\nGame Engine' }, classes: 'game', parent: 'MAJ41477' },
      { data: { id: 'CSCI388', label: 'CSCI388\nVR/AR' }, classes: 'game', parent: 'MAJ41477' },

      // Software Engineering Major
      { data: { id: 'MAJ40277', label: 'Software Engineering Major' }, classes: 'major software-major' },
      { data: { id: 'CSCI318', label: 'CSCI318\nSoftware Engineering' }, classes: 'software', parent: 'MAJ40277' },
      { data: { id: 'CSCI334', label: 'CSCI334\nSoftware Design' }, classes: 'software', parent: 'MAJ40277' },
      { data: { id: 'CSIT377', label: 'CSIT377\nEnterprise Web Dev' }, classes: 'software', parent: 'MAJ40277' },
      { data: { id: 'ISIT219', label: 'ISIT219\nKnowledge Engineering' }, classes: 'software', parent: 'MAJ40277' },

      // Credit Point Requirements
      { data: { id: 'CP200_1', label: '12cp at 200 level\nCSCI subjects' }, classes: 'recommended' },
      { data: { id: 'CP200_2', label: '18cp at 200 level\nCSCI/CSIT/ISIT' }, classes: 'recommended' },

      // Choice between CSCI251 and CSIT213
      { data: { id: 'Choice', label: 'OR' }, classes: 'choice' },

      // Level Boxes
      { data: { id: 'Level100Box', label: '100 Level (Core)' }, classes: 'level-100' },
        { data: { id: 'Level200Box', label: '200 Level (Core)' }, classes: 'level-200' },
      { data: { id: 'Level300Box', label: '300 Level (Core)' }, classes: 'level-300' },

      // Edges (Connections)
      // Core Dependencies
      { data: { source: 'CSIT110', target: 'CSIT121' } },
      { data: { source: 'CSIT110', target: 'CSCI203' } },
      { data: { source: 'CSIT110', target: 'CSIT213' } },
      { data: { source: 'CSIT123', target: 'CSCI203' } },
      { data: { source: 'CSIT115', target: 'CSCI235' } },
      { data: { source: 'CSIT121', target: 'CSCI251' } },
      { data: { source: 'CSIT114', target: 'CSIT214' } },
      { data: { source: 'CSIT214', target: 'CSIT314' } },
      { data: { source: 'CSIT214', target: 'CSIT321' } },
      { data: { source: 'CSIT226', target: 'CSIT321', style: 'dashed' } },

      // AI Major Dependencies
      { data: { source: 'CSIT110', target: 'CSCI218' } },
      { data: { source: 'CSIT110', target: 'CSCI323' } },
      { data: { source: 'CSIT115', target: 'ISIT312' } },
      { data: { source: 'CSCI203', target: 'CSCI316' } },

      // Cyber Security Major Dependencies
      { data: { source: 'CSIT121', target: 'CSCI262_1' } },
      { data: { source: 'CSIT115', target: 'CSCI262_1' } },
      { data: { source: 'CSIT127', target: 'CSCI262_1' } },
      { data: { source: 'CSIT121', target: 'CSIT375' } },
      { data: { source: 'CSIT127', target: 'CSIT375' } },
      { data: { source: 'CSIT110', target: 'CSCI369' } },
      { data: { source: 'CSIT127', target: 'CSIT302' } },

      // Digital Systems Major Dependencies
      { data: { source: 'CSIT121', target: 'CSCI262_2' } },
      { data: { source: 'CSIT115', target: 'CSCI262_2' } },
      { data: { source: 'CSIT127', target: 'CSCI262_2' } },
      { data: { source: 'CSIT121', target: 'CSCI361' } },
      { data: { source: 'CSIT127', target: 'CSCI368' } },
      { data: { source: 'CSIT121', target: 'CSCI368' } },
      { data: { source: 'CSIT110', target: 'CSIT328' } },
      { data: { source: 'CSIT128', target: 'CSIT328' } },

      // Game Major Dependencies
      { data: { source: 'CSIT121', target: 'CSIT242' } },
      { data: { source: 'CSIT213', target: 'CSIT242', style: 'dashed' } },
      { data: { source: 'CSIT121', target: 'CSCI336' } },
      { data: { source: 'CSIT121', target: 'CSCI356' } },
      { data: { source: 'CSIT214', target: 'CSCI356', style: 'dashed' } },
      { data: { source: 'CSIT121', target: 'CSCI388' } },

      // Software Major Dependencies
      { data: { source: 'CSIT121', target: 'CSCI318' } },
      { data: { source: 'CSIT214', target: 'CSCI318' } },
      { data: { source: 'CSIT121', target: 'CSCI334' } },
      { data: { source: 'CSIT214', target: 'CSCI334' } },
      { data: { source: 'CSIT128', target: 'CSIT377' } },
      { data: { source: 'CSIT128', target: 'ISIT219' } },

      // Credit Point Requirements
      { data: { source: 'CP200_1', target: 'CSIT314', style: 'dashed' } },
      { data: { source: 'CP200_2', target: 'CSIT321', style: 'dashed' } },

      // Choice between CSCI251 and CSIT213
      { data: { source: 'CSCI251', target: 'Choice' } },
      { data: { source: 'CSIT213', target: 'Choice' } },
  ],

  layout: {
    name: 'dagre',
    rankDir: 'TB',
    nodeSep: 30,
    edgeSep: 30,
    rankSep: 80,
  }
});

var defaults = {
  container: document.getElementById('cy-nav'),
  viewLiveFramerate: 0,
  thumbnailEventFramerate: 30,
  thumbnailLiveFramerate: false,
  dblClickDelay: 200,
  removeCustomContainer: false,
  rerenderDelay: 100,
};

var nav = cy.navigator(defaults);
