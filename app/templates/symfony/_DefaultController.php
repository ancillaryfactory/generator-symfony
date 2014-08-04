<?php

namespace Test\MainBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Template;

class DefaultController extends Controller
{
    /**
     * @Route("/")
     * @Template("<%= app_name %>MainBundle:Default:rocket.html.twig")
     */
    public function indexAction()
    {
        return array();
    }
}