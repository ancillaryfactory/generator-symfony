<?php

namespace <%= appName %>\MainBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Template;

class DefaultController extends Controller
{
    /**
     * @Route("/")
     * @Template("<%= appName %>MainBundle:Default:rocket.html.twig")
     */
    public function indexAction()
    {
        return array();
    }
}